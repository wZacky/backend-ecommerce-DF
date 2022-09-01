import Joi from 'joi';


const updateSellerSchema = Joi.object({
  firstName: Joi.string(),
  lastName: Joi.string(),
  phoneNumber: Joi.string().pattern(/^\d{9}$/),
  password: Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
})

export default async (req, res, next) => {
  try {
    await updateSellerSchema.validateAsync(req.body);
  
    next()
  } catch (error) {
    res.status(400).json({
      msg: 'Validation Error',
      error,
    })
  }
}