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
  deliveryAddress: String,
  street: String,
  exteriorNumber: Number,
  interiorNumber: String,
  betweenStreets: String,
  city: String,
  country: String,
  zipCode: String,
  references: String,
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
  },
  personalContacts: [String],
  role: {
    type: String,
    enum: ['customer','seller','admin']
  }
})

const User = mongoose.model('User', userSchema);
export { User };