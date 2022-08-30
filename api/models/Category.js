import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  name: String,
  isActive: Boolean,
})

export default mongoose.model('Category', categorySchema);