import Model from "../models";
const { Cart, User } = Model;

export const addToCart = async (req, res, next) => {
  const UserId = req.user.id;
  const cart = await Cart.create({
    UserId
  });
  res.status(201).json(cart);
};

export const getUserCart = async (req, res, next) => {
  const user_id = req.user.id;
  const cart = await Cart.findAll({
    where: {
      user_id: user_id
    },
    include: [
      {
        model: User,
        attributes: {
          exclude: ["password"]
        }
      }
    ]
  });
  res.status(200).json(cart);
};
