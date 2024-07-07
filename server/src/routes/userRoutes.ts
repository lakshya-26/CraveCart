import express from "express";
import myUserController from "../controllers/user.controller";
import { jwtCheck } from "../middlewares/auth.middlewares";

const router = express.Router();

router.post("/", jwtCheck, myUserController.createCurrentUser);


export default router;