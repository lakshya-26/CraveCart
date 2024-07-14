import express from "express";
import multer from "multer";
import MyRestaurantController from "../controllers/restaurant.controllers";
import { jwtCheck, jwtParse } from "../middlewares/auth.middlewares";
import { validateMyRestaurantRequest } from "../middlewares/validation.middlewares";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.get("/", jwtCheck, jwtParse, MyRestaurantController.getMyRestaurant);

router.post(
  "/",
  upload.single("imageFile"),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtParse,
  MyRestaurantController.createMyRestaurant
);

export default router;
