import Model from "../models";
const { Product } = Model;
export const createProduct = async (req, res, next) => {
  const { name, description, image_url, price, stock } = req.body;
  const product = await Product.create({
    name,
    description,
    image_url,
    price,
    stock: Number(stock)
  });
  res.status(201).json({
    product,
    message: "Your product has been successfully added"
  });
};

export const updateProduct = async (req, res, next) => {
  const { name, description, image_url, price, stock } = req.body;
  const id = req.params.id;
  const [total, product] = await Product.update(
    {
      name,
      image_url,
      description,
      price,
      stock
    },
    {
      where: {
        id
      },
      returning: true
    }
  );
  res.status(200).json({
    product: product,
    message: "Your product has been successfully updated"
  });
};

export const deleteProduct = async (req, res, next) => {
  const id = req.params.id;
  const product = await Product.delete({
    where: {
      id
    }
  });
  res.status(200).json("Your product has been successfully deleted");
};

export const getProduct = async (req, res, next) => {
  const products = await Product.findAll();
  res.status(200).json(products);
};
