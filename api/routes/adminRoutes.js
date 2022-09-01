import { Router } from "express";
import registerAdminValidator from "../middlewares/registerAdminValidator.js";
import { register } from "../controllers/authController.js";

const router = Router();

router.route('/adminRegister')
  .post(registerAdminValidator, register);

export default router;