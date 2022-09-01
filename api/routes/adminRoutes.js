import { Router } from "express";
import { register } from "../controllers/authController.js";
import { updateSellerById } from "../controllers/sellerController.js";
import updateSellerValidator from "../middlewares/updateSellerValidator.js";
import registerUserValidator from "../middlewares/registerUserValidator.js";

const router = Router();

router.route('/user')
  .post(registerUserValidator, register);

router.route('/seller/:id')
  .put(updateSellerValidator, updateSellerById)

export default router;