import express from "express";
import { jwtCheck, jwtParse } from "../middlewares/auth.middlewares";
import OrderController from "../controllers/order.controllers";

const router = express.Router();

router.get("/", jwtCheck, jwtParse, OrderController.getMyOrder);

router.post(
  "/checkout/create-checkout-session",
  jwtCheck,
  jwtParse,
  OrderController.createCheckoutSession
);

router.post("/checkout/webhook", OrderController.stripeWebhookhandler);

export default router;
