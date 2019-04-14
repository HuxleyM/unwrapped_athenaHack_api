'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shop = sequelize.define('Shop', {
    latitude: DataTypes.STRING,
    longitute: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  Shop.associate = function(models) {
    // associations can be defined here
  };
  return Shop;
};