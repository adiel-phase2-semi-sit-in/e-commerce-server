const { User } = require("../models");
const { generateToken, comparePassword } = require("../libs");
const {
  ERR_INVALID_EMAIL_PASSWORD,
  SUCCESS_SIGNUP_MESSAGE,
  SUCCESS_SIGNIN_MESSAGE
} = require("../constants");

async function signUp(req, res) {
  const { username, email, password } = req.body;
  const user = await User.create({ username, email, password });
  const access_token = generateToken({
    id: user.id,
    username: user.username,
    email: user.email
  });
  return res.status(201).json({
    access_token,
    message: SUCCESS_SIGNUP_MESSAGE
  });
}

async function signIn(req, res, next) {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user) {
    const userPw = comparePassword(password, user.password);
    if (userPw) {
      const access_token = generateToken({
        id: user.id,
        username: user.username,
        email: user.email
      });
      return res.status(200).json({
        access_token,
        message: SUCCESS_SIGNIN_MESSAGE
      });
    } else {
      next(ERR_INVALID_EMAIL_PASSWORD);
    }
  } else {
    next(ERR_INVALID_EMAIL_PASSWORD);
  }
}

async function findUser(key) {
  const user = await User.findOne({
    where: key
  });
  return user;
}

module.exports = {
  signUp,
  signIn,
  findUser
};
