import { Router } from "express";
import { registerCategory } from "../controllers/categoryController.js";
import { isSellerAuth } from "../middlewares/authSellerValidator.js";
import createCategoryValidator from "../middlewares/createCategoryValidator.js";

const router = Router();

router.route('/')
  .post(isSellerAuth, createCategoryValidator, registerCategory)

export default router;