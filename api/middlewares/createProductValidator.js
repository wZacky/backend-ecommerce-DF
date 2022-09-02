import Joi from 'joi';

const productValidatorSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().allow(''),
  specs: Joi.array().items(Joi.string()).required(),
  category: Joi.string().required(),
  unitPrice: Joi.number().positive(),
  stock: Joi.number().integer().greater(0),
  pictures: Joi.array().items(Joi.string()).required(),
})

export default async (req, res, next) => {
  try {
    await productValidatorSchema.validateAsync(req.body);

    next();
  } catch (error) {
    return res.status(500).json({
      msg: 'Validation error',
      error,
    })
  }
}