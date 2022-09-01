import { Router } from "express";
import { register } from "../controllers/authController.js";
import { deactivateSellerById, updateSellerById } from "../controllers/sellerController.js";
import updateSellerValidator from "../middlewares/updateSellerValidator.js";
import registerUserValidator from "../middlewares/registerUserValidator.js";
import deactiveSellerValidator from "../middlewares/deactiveSellerValidator.js";

const router = Router();

router.route('/user')
  .post(registerUserValidator, register);

router.route('/seller/:id')
  .put(updateSellerValidator, updateSellerById)
  .delete(deactiveSellerValidator, deactivateSellerById);

export default router;