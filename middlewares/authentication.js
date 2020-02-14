import { verifyToken } from "../libs";
import { findUser } from "../controllers";
export default async (req, res, next) => {
  try {
    const token = req.headers.access_token;
    const decoded = verifyToken(token);
    const user = await findUser({
      id: decoded.id
    });
    if (user) {
      req.decoded = decoded;
      next();
    } else {
      next({
        status: 401,
        message: "Please sign in first"
      });
    }
  } catch (err) {
    next(err);
  }
};
