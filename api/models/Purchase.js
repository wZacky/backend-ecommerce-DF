import mongoose from "mongoose";

const purchaseSchema = mongoose.Schema({
  shoppingCart: {
    type: Schema.Types.ObjectId,
    ref: 'ShoppingCart',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  paymentDate: {
    type: Date,
    default: null,
  },
})

export default mongoose.model('Purchase', purchaseSchema);