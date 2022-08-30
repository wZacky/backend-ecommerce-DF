import mongoose from "mongoose";


const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  deliveryAddress: String,
  street: String,
  exteriorNumber: Number,
  interiorNumber: Number,
  betweenStreets: String,
  city: String,
  country: String,
  zipCode: String,
  references: String,
  mail: {
    type: String,
    match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
  },
  password: {
    type: String,
    match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  },
  phoneNumber: {
    type: String,
    match: /^\d{9}$/,
  },
  personalContacts: [String],
  role: {
    type: String,
    enum: ['Customer','Seller','Admin']
  }
})

const User = mongoose.model('User', userSchema);
export { User };