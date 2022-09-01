import Joi from 'joi';

// Valida el req.body en el registro de usuarios tipo admin y seller:
const registerAdminSchema = Joi.object({
  firstName: Joi.string(),
  lastName: Joi.string(),
  email: Joi.string().required().pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/),
  password: Joi.string().required().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
  phoneNumber: Joi.string().required().pattern(/^\d{9}$/),
  role: Joi.string().valid('admin','seller').required()
})

export default async (req, res, next) => {
  try {
    await registerAdminSchema.validateAsync(req.body);

    next();
  } catch (error) {
    return res.status(400).json({
      msg: 'Validation error',
      error,
    })
  }
}