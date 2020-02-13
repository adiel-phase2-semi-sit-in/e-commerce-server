"use strict";
const { hashPassword } = require("../libs");
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
            msg: "username should not be empty"
          },
          notNull: {
            msg: "please enter your username"
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
            msg: "invalid email format"
          },
          notNull: {
            msg: "please enter your email"
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "password should not be empty"
          },
          len: {
            args: [6],
            msg: "password at least have 6 characters"
          },
          notNull: {
            msg: "please enter your password"
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
