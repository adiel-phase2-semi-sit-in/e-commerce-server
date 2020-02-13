const bcrypt = require("bcryptjs");

function hashPassword(password) {
  const SALT = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, SALT);
}

function comparePassword(password, dbPassword) {
  return bcrypt.compareSync(password, dbPassword);
}

module.exports = {
  hashPassword,
  comparePassword
};
