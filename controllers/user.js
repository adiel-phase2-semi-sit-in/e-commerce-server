const { User } = require("../models");
const { generateToken } = require("../libs");

const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  const user = await User.create({ username, email, password });
  const token = generateToken({
    id: user.id,
    username: user.username,
    email: user.email
  });
  return res.status(200).json({
    token,
    message: "Successfully Sign Up"
  });
};

const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
};

module.exports = {
  signUp,
  signIn
};
