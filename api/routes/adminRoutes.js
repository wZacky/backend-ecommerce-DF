import { Router } from "express";
import { register } from "../controllers/authController.js";
// import { deactivateSellerById, updateSellerById } from "../controllers/sellerController.js";
// import updateSellerValidator from "../middlewares/updateSellerValidator.js";
import registerUserValidator from "../middlewares/registerUserValidator.js";
// import deactiveSellerValidator from "../middlewares/deactiveSellerValidator.js";
import { isAdminAuth } from "../middlewares/authAdminValidator.js";

const router = Router();

router.route('/newUser')
  .post(isAdminAuth, registerUserValidator, register);

export default router;