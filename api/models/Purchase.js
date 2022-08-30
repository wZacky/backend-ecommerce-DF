import mongoose, { Schema } from "mongoose";

const purchaseSchema = Schema({
  shoppingCart: {
    type: Schema.Types.ObjectId,
    ref: 'ShoppingCart',
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
})

export default mongoose.model('Purchase', purchaseSchema);