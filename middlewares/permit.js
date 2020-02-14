import { ERR_PERMIT_MESSAGE, ERR_UNAUTHORIZED_STATUS } from "../constants";

export default function(req, res, next) {
  if (req.user.role === "admin") {
    next();
  } else {
    next({
      status: ERR_UNAUTHORIZED_STATUS,
      message: ERR_PERMIT_MESSAGE
    });
  }
}
