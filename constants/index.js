const ERR_EMAIL_PASSWORD = {
  status: 400,
  message: "Email / Password wrong"
};
const SUCCESS_SIGNUP_MESSAGE = "Successfully Sign Up";
const SUCCESS_SIGNIN_MESSAGE = "Successfully Sign In";
const ERR_SEQUELIZE_CONSTRAINT = "SequelizeUniqueConstraintError";
const ERR_SEQUELIZE_VALIDATION = "SequelizeValidationError";
const ERR_SEQUELIZE_UNIQUE_MESSAGE = "email must be unique";
const ERR_EMAIL_UNIQUE = "Email has been used";
const ERR_INTERNAL_SERVER_ERROR_MESSAGE = "Internal Server Error";
const ERR_BAD_REQUEST_STATUS = 400;
const ERR_UNAUTHORIZED_STATUS = 401;
const ERR_INTERNAL_SERVER_ERROR_STATUS = 500;
module.exports = {
  ERR_EMAIL_PASSWORD,
  SUCCESS_SIGNUP_MESSAGE,
  SUCCESS_SIGNIN_MESSAGE,
  ERR_SEQUELIZE_CONSTRAINT,
  ERR_EMAIL_UNIQUE,
  ERR_INTERNAL_SERVER_ERROR_MESSAGE,
  ERR_BAD_REQUEST_STATUS,
  ERR_UNAUTHORIZED_STATUS,
  ERR_SEQUELIZE_UNIQUE_MESSAGE,
  ERR_INTERNAL_SERVER_ERROR_STATUS,
  ERR_SEQUELIZE_VALIDATION
};
