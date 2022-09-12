import Joi from "joi";

const productUpdateSchema = Joi.object({
  name: Joi.string(),
  description: Joi.string().allow(''),
  specs: Joi.array().items(Joi.string()),
  category: Joi.string(),
  unitPrice: Joi.number().positive(),
  stock: Joi.number().integer().greater(0),
  pictures: Joi.array().items(Joi.string()),
})

export default async (req, res, next) => {
  try {
    await productUpdateSchema.validateAsync(req.body);

    next();
  } catch (error) {
    return res.status(500).json({
      msg: 'Validation error',
      error,
    })
  }
}