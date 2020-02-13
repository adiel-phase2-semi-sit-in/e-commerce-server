"use strict";
const {
  ERR_PRODUCT_NAME_EMPTY_MESSAGE,
  ERR_PRODUCT_NAME_NULL_MESSAGE,
  ERR_PRODUCT_PRICE_NULL_MESSAGE,
  ERR_PRODUCT_PRICE_VALUE_MESSAGE,
  ERR_PRODUCT_STOCK_NULL_MESSAGE,
  ERR_PRODUCT_STOCK_VALUE_MESSAGE,
  ERR_PRODUCT_PRICE_DATATYPE_MESSAGE,
  ERR_PRODUCT_STOCK_DATATYPE_MESSAGE
} = require("../constants");

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Product extends Model {}
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: ERR_PRODUCT_NAME_NULL_MESSAGE
        },
        notEmpty: {
          args: true,
          msg: ERR_PRODUCT_NAME_EMPTY_MESSAGE
        }
      },
      image_url: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          isNumeric: {
            args: true,
            msg: ERR_PRODUCT_PRICE_DATATYPE_MESSAGE
          },
          notNull: ERR_PRODUCT_PRICE_NULL_MESSAGE,
          min: {
            args: 1,
            msg: ERR_PRODUCT_PRICE_VALUE_MESSAGE
          }
        }
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: {
            args: true,
            msg: ERR_PRODUCT_STOCK_DATATYPE_MESSAGE
          },
          notNull: ERR_PRODUCT_STOCK_NULL_MESSAGE,
          min: {
            args: 0,
            msg: ERR_PRODUCT_STOCK_VALUE_MESSAGE
          }
        }
      }
    },
    {
      sequelize
    }
  );
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};
