import { User } from "../models/User.js"

const updateSellerById = async (req, res) => {
  try {
    const { id } = req.params;

    /* if (!id) {
      return
    } */
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {new: true});

    
    return res.json({
      msg: 'Seller updated',
      data: { updatedUser }
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error when updating',
      error,
    })
  }
}

const deactivateSellerById = async (req, res) => {
  try {
    const { id } = req.params;

    const sellerDeactivated = await User.findByIdAndUpdate(id, {isActive: false}, {new: true})

    return res.json({
      msg: 'Seller deactivated',
      data: { sellerDeactivated },
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error when deactivating seller',
      error,
    })
  }
}

export { updateSellerById, deactivateSellerById };