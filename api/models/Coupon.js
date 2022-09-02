import mongoose from "mongoose";

const couponSchema = mongoose.Schema({
  name: String,
  isActive: Boolean,
})

export default mongoose.model('Coupon', couponSchema);