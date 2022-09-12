import { Router } from "express";
import { deactivateProductById, getAllProducts, registerProduct, updateProductById } from "../controllers/productController.js";
import { isSellerAuth } from "../middlewares/authSellerValidator.js";
import createProductValidator from "../middlewares/createProductValidator.js";
import deactiveProductValidator from "../middlewares/deactiveProductValidator.js";
import updateProductValidator from "../middlewares/updateProductValidator.js";

const router = Router();

router.route('/')
  .get(getAllProducts)
  .post(isSellerAuth, createProductValidator, registerProduct);

router.route('/:id')
  .put(isSellerAuth, updateProductValidator, updateProductById)
  .delete(isSellerAuth, deactiveProductValidator, deactivateProductById)

export default router;