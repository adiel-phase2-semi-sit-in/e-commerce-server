"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("Carts", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        user_id: {
          type: Sequelize.INTEGER
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
        queryInterface.addConstraint("Carts", ["user_id"], {
          type: "foreign key",
          name: "Carts_user_id_FK",
          references: {
            table: "Users",
            field: "id"
          },
          onDelete: "cascade"
        })
      );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Carts");
  }
};
