import express from "express";
import myUserController from "../controllers/user.controller";

const router = express.Router();

router.post("/", myUserController.createCurrentUser);


export default router;