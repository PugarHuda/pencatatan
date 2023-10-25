'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NamaRumahSakit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NamaRumahSakit.init({
    kota: DataTypes.STRING,
    spesialisasi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'NamaRumahSakit',
  });
  return NamaRumahSakit;
};