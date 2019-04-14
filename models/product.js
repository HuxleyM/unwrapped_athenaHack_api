'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    fruit: DataTypes.BOOLEAN,
    vegetables: DataTypes.BOOLEAN,
    dry_goods: DataTypes.BOOLEAN,
    beauty_products: DataTypes.BOOLEAN,
    wine: DataTypes.BOOLEAN
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};