import { Router } from "express";
import { getAllProducts, registerProduct } from "../controllers/productController.js";
import { isSellerAuth } from "../middlewares/authSellerValidator.js";
import createProductValidator from "../middlewares/createProductValidator.js";

const router = Router();

router.route('/')
  .get(getAllProducts)
  .post(isSellerAuth, createProductValidator, registerProduct);

export default router;