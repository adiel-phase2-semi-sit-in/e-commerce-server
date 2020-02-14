import { verifyToken } from "../libs";
import { findUser } from "../controllers";
import {
  ERR_UNAUTHORIZED_STATUS,
  ERR_AUTHENTICATION_MESSAGE
} from "../constants";
export default async (req, res, next) => {
  try {
    const token = req.headers.access_token;
    const decoded = verifyToken(token);
    req.user = await findUser(decoded.id);
    if (req.user) {
      next();
    } else {
      next({
        status: ERR_UNAUTHORIZED_STATUS,
        message: ERR_AUTHENTICATION_MESSAGE
      });
    }
  } catch (err) {
    next(err);
  }
};
