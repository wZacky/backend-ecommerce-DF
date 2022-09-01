import Joi from 'joi';


const deactiveSellerSchema = Joi.object({});

export default async (req, res, next) => {
  try {
    await deactiveSellerSchema.validateAsync(req.body);
    next()
  } catch (error) {
    return res.json({
      msg: 'Validation error',
      error,
    })
  }
}