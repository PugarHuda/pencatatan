'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NamaObat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NamaObat.init({
    manfaat: DataTypes.STRING,
    dosis: DataTypes.STRING,
    efekSamping: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'NamaObat',
  });
  return NamaObat;
};