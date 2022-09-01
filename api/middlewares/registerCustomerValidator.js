import Joi from "joi";

const customerValidatorSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  deliveryAddress: Joi.string().required(),
  street: Joi.string().required(),
  exteriorNumber: Joi.number(),
  interiorNumber: Joi.string().required(),
  betweenStreets: Joi.string().required(),
  city: Joi.string().required(),
  country: Joi.string().required(),
  zipCode: Joi.string().required(),
  references: Joi.string().required(),
  email: Joi.string().required().pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/),
  password: Joi.string().required().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
  phoneNumber: Joi.string().required().pattern(/^\d{9}$/),
  personalContacts: Joi.array().items(Joi.string()),
  role: Joi.string().required().allow('customer','seller','admin'),
})

export default async (req, res, next) => {
  try {
    await customerValidatorSchema.validateAsync(req.body);

    next()
  } catch (error) {
    return res.status(400).json({
      msg: 'Validation error',
      error,
    })
  }

}