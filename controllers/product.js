const { Product } = require("../models");

async function createProduct(req, res, next) {
  const { name, image_url, price, stock } = req.body;
  const product = await Product.create({
    name,
    image_url,
    price,
    stock
  });
  return res.status(201).json({
    product,
    message: "Your product has been successfully added"
  });
}

module.export = {
  createProduct
};
