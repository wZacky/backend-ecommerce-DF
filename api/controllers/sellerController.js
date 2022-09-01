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

export {updateSellerById};