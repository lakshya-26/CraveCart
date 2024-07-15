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


export default router;