"use strict";
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Cart extends Model {}
  Cart.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        field: "user_id"
      }
    },
    {
      sequelize
    }
  );
  Cart.associate = function(models) {
    // associations can be defined here
    Cart.belongsTo(models.User, {
      references: {
        model: "User",
        key: "id"
      }
    });
  };
  return Cart;
};
