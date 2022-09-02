import Category from "../models/Category.js";

const registerCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);

    return res.json({
      msg: 'Category created',
      data: { category },
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error when creating category',
      error,
    })
  }
}

export { registerCategory };