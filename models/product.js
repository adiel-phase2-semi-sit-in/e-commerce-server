'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    image_url: DataTypes.STRING,
    price: DataTypes.FLOAT,
    stock: DataTypes.NUMBER
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};