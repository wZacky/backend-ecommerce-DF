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


export { registerProduct, getAllProducts };