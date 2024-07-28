import express from "express";
import { jwtCheck, jwtParse } from "../middlewares/auth.middlewares";
import OrderController from "../controllers/order.controllers";

const router = express.Router();

router.post(
  "/checkout/create-checkout-session",
  jwtCheck,
  jwtParse,
  OrderController.createCheckoutSession
);


export default router;