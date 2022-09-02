import Joi from 'joi';

const categoryValidatorSchema = Joi.object({
  name: Joi.string().required(),
})

export default async (req, res, next) => {
  try {
    await categoryValidatorSchema.validateAsync(req.body);

    next()
  } catch (error) {
    return res.status(400).json({
      msg: 'Validation error',
      error,
    })
  }
}