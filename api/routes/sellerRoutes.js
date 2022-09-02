import { Router } from "express";
import { deactivateSellerById, updateSellerById } from "../controllers/sellerController.js";
import { isAdminAuth } from "../middlewares/authAdminValidator.js";
import deactiveSellerValidator from "../middlewares/deactiveSellerValidator.js";
import updateSellerValidator from "../middlewares/updateSellerValidator.js";

const router = Router();

router.route('/:id')
  .put(isAdminAuth, updateSellerValidator, updateSellerById)
  .delete(isAdminAuth, deactiveSellerValidator, deactivateSellerById);

export default router;