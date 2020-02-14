"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("Products", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING
        },
        description: {
          type: Sequelize.STRING
        },
        image_url: {
          type: Sequelize.STRING
        },
        price: {
          allowNull: false,
          type: Sequelize.FLOAT
        },
        stock: {
          allowNull: false,
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
      .then(() =>
        queryInterface.addConstraint("Products", ["price"], {
          type: "check",
          where: {
            price: {
              [Sequelize.Op.gte]: 0
            }
          }
        })
      )
      .then(() =>
        queryInterface.addConstraint("Products", ["stock"], {
          type: "check",
          where: {
            stock: {
              [Sequelize.Op.gte]: 0
            }
          }
        })
      );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Products");
  }
};
