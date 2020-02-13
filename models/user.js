"use strict";
const { hashPassword } = require("../libs");
const {
  ERR_USERNAME_EMPTY_MESSAGE,
  ERR_USERNAME_NULL_MESSAGE,
  ERR_EMAIL_INVALID_MESSAGE,
  ERR_EMAIL_NULL_MESSAGE,
  ERR_PASSWORD_LENGTH_MESSAGE,
  ERR_PASSWORD_NULL_MESSAGE
} = require("../constants");

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class User extends Model {}
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: ERR_USERNAME_EMPTY_MESSAGE
          },
          notNull: {
            msg: ERR_USERNAME_NULL_MESSAGE
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            args: true,
            msg: ERR_EMAIL_INVALID_MESSAGE
          },
          notNull: {
            msg: ERR_EMAIL_NULL_MESSAGE
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [6],
            msg: ERR_PASSWORD_LENGTH_MESSAGE
          },
          notNull: {
            msg: ERR_PASSWORD_NULL_MESSAGE
          }
        }
      }
    },
    {
      hooks: {
        beforeCreate: function(user, opt) {
          const hash = hashPassword(user.password);
          user.password = hash;
        }
      },
      sequelize
    }
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
