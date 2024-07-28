import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes";
import restaurantRoutes from "./routes/restaurantRoutes"
import restaRoutes from "./routes/restaRoutes";
import orderRoutes from "./routes/orderRoutes";
import { v2 as cloudinary } from "cloudinary";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
        .then(() => console.log("Connected to MongoDB"));


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const app =express();
app.use(express.json());
app.use(cors());

app.get("/health", async(req:Request, res:Response) => {
    res.send({message:"Health ok!"})
})

app.use("/api/my/user", userRoutes);
app.use("/api/my/restaurant", restaurantRoutes);
app.use("/api/restaurant", restaRoutes);
app.use("api/order", orderRoutes);

app.listen(7000, () => {
    console.log("Server is running on port 7000");
})