import mongoose, { Schema } from 'mongoose';


const shopingCartSchema = Schema({
  paymentDate: {
    type: Date,
    default: null,
  },
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
    type: Schema.Types.ObjectId,
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