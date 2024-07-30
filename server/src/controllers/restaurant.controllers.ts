import { Request, Response } from "express";
import Restaurant from "../models/restaurant.models";
import cloudinary from "cloudinary";
import mongoose from "mongoose";
import stream from "stream";
import Order from "../models/order.models";

const getMyRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurant = await Restaurant.findOne({ user: req.userId });
    if (!restaurant) {
      return res.status(404).json({ message: "restaurant not found" });
    }
    res.json(restaurant);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching restaurant" });
  }
};

const getMyRestaurantOrders = async (req: Request, res: Response) => {
  try {
    const restaurant = await Restaurant.findOne({ user: req.userId });

    if (!restaurant) {
      return res.status(404).json({ message: "restaurant not found!" });
    }

    const orders = await Order.find({
      restaurant: restaurant._id,
    })
      .populate("restaurant")
      .populate("user");

    res.json(orders);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "something went wrong!" });
  }
};

const uploadToCloudinary = (
  fileBuffer: Buffer,
  options: object
): Promise<any> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.v2.uploader.upload_stream(
      options,
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    const bufferStream = new stream.PassThrough();
    bufferStream.end(fileBuffer);
    bufferStream.pipe(uploadStream);
  });
};

const createMyRestaurant = async (req: Request, res: Response) => {
  try {
    const existingRestaurant = await Restaurant.findOne({
      user: req.userId,
    });

    if (existingRestaurant) {
      return res
        .status(409)
        .json({ message: "user restaurant already exists!" });
    }

    if (!req.file) {
      return res
        .status(400)
        .json({ message: "No file uploaded or file is too large!" });
    }
    const image = req.file as Express.Multer.File;

    const uploadResponse = await uploadToCloudinary(image.buffer, {
      folder: "restaurant_images",
    });

    const restaurant = new Restaurant(req.body);
    restaurant.imageUrl = uploadResponse.url;
    restaurant.user = new mongoose.Types.ObjectId(req.userId);
    restaurant.lastUpdated = new Date();
    await restaurant.save();

    res.status(201).send(restaurant);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

const updateMyRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurant = await Restaurant.findOne({
      user: req.userId,
    });

    if (!restaurant) {
      return res.status(404).json({ message: "restaurant not found!" });
    }

    restaurant.restaurantName = req.body.restaurantName;
    restaurant.city = req.body.city;
    restaurant.country = req.body.country;
    restaurant.deliveryPrice = req.body.deliveryPrice;
    restaurant.estimatedDeliveryTime = req.body.estimatedDeliveryTime;
    restaurant.cuisines = req.body.cuisines;
    restaurant.menuItems = req.body.menuItems;
    restaurant.lastUpdated = new Date();

    if (req.file) {
      const image = req.file as Express.Multer.File;
      const uploadResponse = await uploadToCloudinary(image.buffer, {
        folder: "restaurant_images",
      });
      restaurant.imageUrl = uploadResponse.url;
    }

    await restaurant.save();
    res.status(200).send(restaurant);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

const updateOrderStatus = async(req:Request, res: Response) => {
  try {
    const {orderId} = req.params;
    const {status} = req.body;

    const order = await Order.findById(orderId);
    if(!order){
      return res.status(404).json({message: "Order not found!"});
    }

    const restaurant = await Restaurant.findById(order.restaurant);

    if(restaurant?.user?._id.toString() !== req.userId){
      return res.status(401).send();
    }

    order.status = status;
    await order.save();

    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: "unable to update order status"});  }
}

export default {
  getMyRestaurant,
  getMyRestaurantOrders,
  createMyRestaurant,
  updateMyRestaurant,
  updateOrderStatus
};
