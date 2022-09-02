import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
})

export default mongoose.model('Category', categorySchema);