import Joi from "joi";

const productDeactiveSchema = Joi.object({});

export default async (req, res, next) => {
  try {
    await productDeactiveSchema.validateAsync(req.body);
  
    next();
  } catch (error) {
    return res.status(400).json({
      msg: 'Validation error',
      error,
    })
  }
}