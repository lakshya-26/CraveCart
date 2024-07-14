import { Request, Response } from "express";
import Restaurant from "../models/restaurant.models";
import cloudinary from "cloudinary";
import mongoose from "mongoose";
import stream from "stream";


const uploadToCloudinary = (fileBuffer: Buffer, options: object): Promise<any> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.v2.uploader.upload_stream(options, (error, result) => {
      if (error) return reject(error);
      resolve(result);
    });

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
      return res.status(400).json({ message: "No file uploaded or file is too large!" });
    }
    const image = req.file as Express.Multer.File;

    const uploadResponse = await uploadToCloudinary(image.buffer, { folder: "restaurant_images" });

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

export default {
    createMyRestaurant
}