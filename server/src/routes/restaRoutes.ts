import express from "express";
import { param } from "express-validator";
import restaControllers from "../controllers/resta.controllers";

const router = express.Router();

router.get(
  "/search/:city",
  param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City parameter must be a valid string"),
    restaControllers.searchRestaurant
);

router.get(
  "/:restaurantId", 
  param("restaurantId")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("RestaurantId parameter must be a valid string"),
    restaControllers.getRestaurant
)


export default router;