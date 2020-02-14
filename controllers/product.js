import Model from "../models";
const Product = Model.Product;
export const createProduct = async (req, res, next) => {
  const { name, image_url, price, stock } = req.body;
  const product = await Product.create({
    name,
    image_url,
    price,
    stock
  });
  res.status(201).json({
    product,
    message: "Your product has been successfully added"
  });
};
