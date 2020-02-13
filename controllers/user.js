const { User } = require("../models");

class UserController {
  static async register(req, res, next) {
    const { username, email, password } = req.body;
    User.create({ username, email, password })
      .then(response => {
        res.status(201).json(response);
      })
      .catch(err => next(err));
  }
}

module.exports = UserController;
