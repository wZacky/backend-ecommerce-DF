import mongoose, { Schema } from "mongoose";

const productSchema = Schema({
  name: String,
  description: String,
  specs: [String],
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  unitPrice: Number,
  stock: Number,
  pictures: [String],
  isActive: Boolean,
})

export default mongoose.model('Product', productSchema);