import Model from "../db/models";
import { generateToken, comparePassword } from "../libs";
import {
  ERR_INVALID_EMAIL_PASSWORD,
  SUCCESS_SIGNUP_MESSAGE,
  SUCCESS_SIGNIN_MESSAGE
} from "../constants";

const { User } = Model;

export const signUp = async (req, res) => {
  const { username, email, password, role } = req.body;
  const user = await User.create({ username, email, password, role });
  const access_token = generateToken({
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role
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
      const payload = {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role
      };
      const access_token = generateToken(payload);
      req.session.user = payload;
      console.log(req.session);
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

export const findUser = async id => {
  const user = await User.findOne({
    where: {
      id
    }
  });
  return user;
};
