"use strict";
export default (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class CartMeta extends Model {}
  CartMeta.init(
    {
      CartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "cart_id",
        validate: {
          notNull: {
            args: true,
            msg: "cart_id is required field"
          }
        }
      },
      ProductId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "product_id",
        validate: {
          notNull: {
            args: true,
            msg: "product_id is required field"
          }
        }
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: {
            args: [1],
            msg: "quantity should not less than 1"
          },
          notNull: {
            args: true,
            msg: "quantity is required field"
          }
        }
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      sequelize,
      tableName: "CartMetas"
    }
  );
  CartMeta.associate = function(models) {
    // associations can be defined here
    CartMeta.belongsTo(models.Cart, {
      references: {
        model: "Cart",
        key: "id"
      }
    });
    CartMeta.belongsTo(models.Product, {
      references: "Product",
      key: "id"
    });
  };
  return CartMeta;
};
