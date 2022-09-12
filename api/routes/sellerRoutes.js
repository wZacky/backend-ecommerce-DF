import { Router } from "express";
import { deactivateSellerById, updateSellerById } from "../controllers/sellerController.js";
import { isAdminAuth } from "../middlewares/authAdminValidator.js";
import deactivateSellerValidator from "../middlewares/deactivateSellerValidator.js";
import updateSellerValidator from "../middlewares/updateSellerValidator.js";

const router = Router();

router.route('/:id')
  .put(isAdminAuth, updateSellerValidator, updateSellerById)
  .delete(isAdminAuth, deactivateSellerValidator, deactivateSellerById);

export default router;