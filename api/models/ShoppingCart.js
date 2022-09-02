import mongoose from 'mongoose';


const shopingCartSchema = mongoose.Schema({
  items: [
    {
      item: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
      quantity: Number,
    }
  ],
  coupon: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Coupon',
  },
  /* discountedTotal: {
    type: Number,
    required: () => shopingCartSchema.coupon ? true : false,
  }, */
  isActive: Boolean,
  total: {
    type: Number,
    default: 0,
  },
})

export default mongoose.model('ShoppingCart', shopingCartSchema);