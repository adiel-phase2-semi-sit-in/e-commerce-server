import Model from "../db/models";
import Cart from "../models/cart";
const { User, CartMeta, Product } = Model;

export const addToCart = async (req, res, next) => {
  const productId = req.params.productId;
  let userCart = new Cart(req.session.cart ? req.session.cart : {});

  const product = await Product.findByPk(productId);
  userCart.addItem(product);
  const items = userCart.getItems();

  req.session.cart = userCart;
  res.status(200).json(items);
};
