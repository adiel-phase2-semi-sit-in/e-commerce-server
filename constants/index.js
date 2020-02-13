const ERR_INVALID_EMAIL_PASSWORD = {
  status: 400,
  message: "Email / Password wrong"
};
// error status
const ERR_BAD_REQUEST_STATUS = 400;
const ERR_UNAUTHORIZED_STATUS = 401;
const ERR_INTERNAL_SERVER_ERROR_STATUS = 500;

// auth
const SUCCESS_SIGNUP_MESSAGE = "Successfully Sign Up";
const SUCCESS_SIGNIN_MESSAGE = "Successfully Sign In";

// sequelize
const ERR_SEQUELIZE_CONSTRAINT = "SequelizeUniqueConstraintError";
const ERR_SEQUELIZE_VALIDATION = "SequelizeValidationError";
const ERR_SEQUELIZE_UNIQUE_MESSAGE = "email must be unique";
const ERR_EMAIL_UNIQUE = "Email has been used";
const ERR_INTERNAL_SERVER_ERROR_MESSAGE = "Internal Server Error";

// user
const ERR_USERNAME_EMPTY_MESSAGE = "Username should not be empty";
const ERR_USERNAME_NULL_MESSAGE = "Username is required field";
const ERR_EMAIL_INVALID_MESSAGE = "Invalid email format";
const ERR_EMAIL_NULL_MESSAGE = "Email is required field";
const ERR_PASSWORD_NULL_MESSAGE = "Password is required field";
const ERR_PASSWORD_LENGTH_MESSAGE = "Password at least have 6 characters";
const ERR_ROLE_ENUM_MESSAGE = "Invalid user role";
// product
const ERR_PRODUCT_NAME_NULL_MESSAGE = "Product name is required field";
const ERR_PRODUCT_NAME_EMPTY_MESSAGE = "Product name should not be empty";
const ERR_PRODUCT_PRICE_NULL_MESSAGE = "Product price is required field";
const ERR_PRODUCT_PRICE_DATATYPE_MESSAGE = "Product price is numeric field";
const ERR_PRODUCT_PRICE_VALUE_MESSAGE =
  "Product price value should greater than 0";
const ERR_PRODUCT_STOCK_NULL_MESSAGE = "Product stock is required field";
const ERR_PRODUCT_STOCK_DATATYPE_MESSAGE = "Product stock is numeric field";
const ERR_PRODUCT_STOCK_VALUE_MESSAGE =
  "Product stock value should greater equal than 0";
// export
module.exports = {
  ERR_INVALID_EMAIL_PASSWORD,
  SUCCESS_SIGNUP_MESSAGE,
  SUCCESS_SIGNIN_MESSAGE,
  ERR_SEQUELIZE_CONSTRAINT,
  ERR_EMAIL_UNIQUE,
  ERR_INTERNAL_SERVER_ERROR_MESSAGE,
  ERR_BAD_REQUEST_STATUS,
  ERR_UNAUTHORIZED_STATUS,
  ERR_SEQUELIZE_UNIQUE_MESSAGE,
  ERR_INTERNAL_SERVER_ERROR_STATUS,
  ERR_SEQUELIZE_VALIDATION,
  ERR_USERNAME_EMPTY_MESSAGE,
  ERR_USERNAME_NULL_MESSAGE,
  ERR_EMAIL_INVALID_MESSAGE,
  ERR_EMAIL_NULL_MESSAGE,
  ERR_PASSWORD_NULL_MESSAGE,
  ERR_PASSWORD_LENGTH_MESSAGE,
  ERR_ROLE_ENUM_MESSAGE,
  ERR_PRODUCT_NAME_NULL_MESSAGE,
  ERR_PRODUCT_NAME_EMPTY_MESSAGE,
  ERR_PRODUCT_PRICE_NULL_MESSAGE,
  ERR_PRODUCT_PRICE_VALUE_MESSAGE,
  ERR_PRODUCT_STOCK_NULL_MESSAGE,
  ERR_PRODUCT_STOCK_VALUE_MESSAGE,
  ERR_PRODUCT_PRICE_DATATYPE_MESSAGE,
  ERR_PRODUCT_STOCK_DATATYPE_MESSAGE
};
