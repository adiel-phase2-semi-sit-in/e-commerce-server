const {
  ERR_SEQUELIZE_CONSTRAINT,
  ERR_SEQUELIZE_UNIQUE_MESSAGE,
  ERR_SEQUELIZE_VALIDATION,
  ERR_EMAIL_UNIQUE,
  ERR_INTERNAL_SERVER_ERROR_MESSAGE,
  ERR_UNAUTHORIZED_STATUS,
  ERR_BAD_REQUEST_STATUS,
  ERR_INTERNAL_SERVER_ERROR_STATUS
} = require("../constants");
module.exports = function(err, req, res, next) {
  if (err.name === ERR_SEQUELIZE_CONSTRAINT) {
    const errors = err.errors.reduce(function(acc, val) {
      if (val.message == ERR_SEQUELIZE_UNIQUE_MESSAGE) {
        acc.push(ERR_EMAIL_UNIQUE);
      }
      return acc;
    }, []);
    res.status(ERR_BAD_REQUEST_STATUS).json(errors);
  } else if (err.name === ERR_SEQUELIZE_VALIDATION) {
    const errors = err.errors.reduce(function(acc, val) {
      acc.push(val.message);
      return acc;
    }, []);
    res.status(ERR_BAD_REQUEST_STATUS).json(errors);
  } else {
    res
      .status(err.status || ERR_INTERNAL_SERVER_ERROR_STATUS)
      .json(err.message || ERR_INTERNAL_SERVER_ERROR_MESSAGE);
  }
};
