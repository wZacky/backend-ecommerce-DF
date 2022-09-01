import mongoose from "mongoose";


const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  deliveryAddress: {
    type: String,
    default: '',
  },
  street: {
    type: String,
    default: '',
  },
  exteriorNumber: {
    type: Number,
    default: 0,
  },
  interiorNumber: {
    type: String,
    default: '',
  },
  betweenStreets: {
    type: String,
    default: '',
  },
  city: {
    type: String,
    default: '',
  },
  country: {
    type: String,
    default: '',
  },
  zipCode: {
    type: String,
    default: '',
  },
  references: {
    type: String,
    default: '',
  },
  email: {
    type: String,
    unique: true,
    match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
    required: true,
  },
  password: {
    type: String,
    //match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    required: true,
  },
  phoneNumber: {
    type: String,
    match: /^\d{9}$/,
    required: true,
  },
  personalContacts: [String],
  role: {
    type: String,
    enum: ['customer','seller','admin'],
  },
  isActive: {
    type: Boolean,
    default: true,
    required: true,
  },
})

const User = mongoose.model('User', userSchema);
export { User };