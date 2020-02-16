"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("CartMetas", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        cart_id: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        product_id: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        quantity: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        status: {
          type: Sequelize.BOOLEAN,
          defaultValue: false
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      })
      .then(_ =>
        queryInterface.addConstraint("CartMetas", ["quantity"], {
          type: "check",
          where: {
            quantity: {
              [Sequelize.Op.gt]: 0
            }
          }
        })
      )
      .then(_ =>
        queryInterface.addConstraint("CartMetas", ["cart_id"], {
          type: "foreign key",
          name: "CartMetas_cart_id_FK",
          references: {
            table: "Carts",
            field: "id"
          },
          onDelete: "cascade"
        })
      )
      .then(_ =>
        queryInterface.addConstraint("CartMetas", ["product_id"], {
          type: "foreign key",
          name: "CartMetas_product_id_FK",
          references: {
            table: "Products",
            field: "id"
          },
          onDelete: "cascade"
        })
      );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("CartMetas");
  }
};
