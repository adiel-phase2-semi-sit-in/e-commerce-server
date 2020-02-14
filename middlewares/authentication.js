const { verifyToken } = require("../libs");
const { findUser } = require("../controllers");
module.exports = async function(req, res, next) {
  try {
    const token = req.headers.access_token;
    const decoded = verifyToken(token);
    const user = await findUser({
      id: decoded.id
    });
    if (user) {
      req.decoded = decoded;
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
