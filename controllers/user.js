const { User } = require("../models");

class UserController {
  static register(req, res, next) {
    const { username, email, password } = req.body;
    User.create({
      username,
      email,
      password
    })
      .then(response => {
        res.status(201).json(response);
      })
      .catch(err => res.status(500).json(err));
  }
}

module.exports = UserController;
