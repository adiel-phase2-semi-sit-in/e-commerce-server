export const ERR_INVALID_EMAIL_PASSWORD = {
  status: 400,
  message: "Email / Password wrong"
};
// error status
export const ERR_BAD_REQUEST_STATUS = 400;
export const ERR_UNAUTHORIZED_STATUS = 401;
export const ERR_INTERNAL_SERVER_ERROR_STATUS = 500;

// auth
export const SUCCESS_SIGNUP_MESSAGE = "Successfully Sign Up";
export const SUCCESS_SIGNIN_MESSAGE = "Successfully Sign In";

// sequelize
export const ERR_SEQUELIZE_CONSTRAINT = "SequelizeUniqueConstraintError";
export const ERR_SEQUELIZE_VALIDATION = "SequelizeValidationError";
export const ERR_SEQUELIZE_UNIQUE_MESSAGE = "email must be unique";
export const ERR_EMAIL_UNIQUE = "Email has been used";
export const ERR_INTERNAL_SERVER_ERROR_MESSAGE = "Internal Server Error";

// user
export const ERR_USERNAME_EMPTY_MESSAGE = "Username should not be empty";
export const ERR_USERNAME_NULL_MESSAGE = "Username is required field";
export const ERR_EMAIL_INVALID_MESSAGE = "Invalid email format";
export const ERR_EMAIL_NULL_MESSAGE = "Email is required field";
export const ERR_PASSWORD_NULL_MESSAGE = "Password is required field";
export const ERR_PASSWORD_LENGTH_MESSAGE =
  "Password at least have 6 characters";
export const ERR_ROLE_ENUM_MESSAGE = "Invalid user role";
// product
export const ERR_PRODUCT_NAME_NULL_MESSAGE = "Product name is required field";
export const ERR_PRODUCT_NAME_EMPTY_MESSAGE =
  "Product name should not be empty";
export const ERR_PRODUCT_PRICE_NULL_MESSAGE = "Product price is required field";
export const ERR_PRODUCT_PRICE_DATATYPE_MESSAGE =
  "Product price is numeric field";
export const ERR_PRODUCT_PRICE_VALUE_MESSAGE =
  "Product price should should not be less than 0";
export const ERR_PRODUCT_STOCK_NULL_MESSAGE = "Product stock is required field";
export const ERR_PRODUCT_STOCK_DATATYPE_MESSAGE =
  "Product stock is numeric field";
export const ERR_PRODUCT_STOCK_VALUE_MESSAGE =
  "Product stock should not be less than 0";
export const ERR_PRODUCT_NOT_FOUND_MESSAGE =
  "The resource you are looking for might have been removed, had its name changed, or is temporarily unavailable";

// authentication and authorized
export const ERR_AUTHENTICATION_MESSAGE =
  "To continue access this feature, please sign in to your account";
export const ERR_PERMIT_MESSAGE = "Only Admin can access this feature";
export const ERR_INVALID_USER_ACCESS_TOKEN = "JsonWebTokenError";
