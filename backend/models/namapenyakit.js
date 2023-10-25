'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NamaPenyakit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NamaPenyakit.init({
    tanda: DataTypes.STRING,
    penyebab: DataTypes.STRING,
    gejala: DataTypes.STRING,
    caraMengobati: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'NamaPenyakit',
  });
  return NamaPenyakit;
};