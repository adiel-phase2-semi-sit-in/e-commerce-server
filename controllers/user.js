import Model from "../models";
import { generateToken, comparePassword } from "../libs";
import {
  ERR_INVALID_EMAIL_PASSWORD,
  SUCCESS_SIGNUP_MESSAGE,
  SUCCESS_SIGNIN_MESSAGE
} from "../constants";

const User = Model.User;

export const signUp = async (req, res) => {
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
};

export const signIn = async (req, res, next) => {
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
};

export const findUser = async key => {
  const user = await User.findOne({
    where: key
  });
  return user;
};
