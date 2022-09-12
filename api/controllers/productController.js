import Product from "../models/Product.js";

const registerProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
  
    return res.json({
      msg: 'Product created',
      data: { product },
    })
    
  } catch (error) {
    return res.status(500).json({
      msg: 'Error when creating product',
      error,
    })
  }
}

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    return res.json({
      msg: 'Products List',
      data: products,
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error when getting products',
      error,
    })
  }
}

const updateProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {new: true})

    /* if (!product) {
      return res.status(404).json({
        msg: 'Product inexistenting'
      })
    } */
    return res.json({
      msg: 'Product updated',
      data: { updatedProduct }
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error when updating',
      error,
    })
  }
}

export { registerProduct, getAllProducts, updateProductById };