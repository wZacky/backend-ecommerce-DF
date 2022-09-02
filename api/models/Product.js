import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  description: String,
  specs: [String],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
  unitPrice: Number,
  stock: Number,
  pictures: [String],
  isActive: {
    type: Boolean,
    default: true,
  },
})

export default mongoose.model('Product', productSchema);