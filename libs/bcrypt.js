import bcrypt from "bcryptjs";

export const hashPassword = password => {
  const SALT = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, SALT);
};

export const comparePassword = (password, dbPassword) => {
  return bcrypt.compareSync(password, dbPassword);
};
