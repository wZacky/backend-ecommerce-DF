import { Router } from 'express';
import { login, register } from '../controllers/authController.js'
import loginCustomerValidator from '../middlewares/loginCustomerValidator.js';
import registerCustomerValidator from '../middlewares/registerCustomerValidator.js';

const router = Router();

// TODO: Agregar middleware de validacion en el login
router
  .post('/register',registerCustomerValidator ,register)
  .post('/login', loginCustomerValidator, login);

export default router;