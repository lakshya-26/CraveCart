import { Request, Response } from "express";
import User from "../models/user.models";

const createCurrentUser = async(req: Request, res: Response) => {
    //1. check if the user exists
    // 2. create the user if it doesn't exist
    //3. return the user object to the calling client
    try {
        const {auth0Id} = req.body;
        const exisitingUser = await User.findOne({auth0Id});

        if(exisitingUser){
            return res.status(200).json(exisitingUser.toObject());
        }

        const newUser = new User(req.body);
        await newUser.save();

        res.status(201).json(newUser.toObject());
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error creating user"});
    }
}

export default {
    createCurrentUser
}