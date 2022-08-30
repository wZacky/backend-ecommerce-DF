import mongoose, { Schema } from "mongoose";

const couponSchema = Schema({
  name: String,
  isActive: Boolean,
})

export default mongoose.model('Coupon', couponSchema);