const { User } = require("../models");

class UserController {
  static async register(req, res) {
    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password });
    res.status(200).json(user);
  }
}

module.exports = UserController;
