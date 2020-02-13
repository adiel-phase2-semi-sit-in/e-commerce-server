"use strict";
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Product extends Model {}
  Product.init({
    name: {
      type: DataTypes.STRING
    },
    image_url: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.FLOAT
    },
    stock: {
      type: DataTypes.INTEGER
    }
  });
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};
