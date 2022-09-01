import Joi from 'joi';

const loginCustomerSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
})

export default async (req, res, next) => {
  try {
    await loginCustomerSchema.validateAsync(req.body)
    
    next()
  } catch (error) {
    return res.status(400).json({
      msg: 'Error validating data',
      error,
    })
  }

}