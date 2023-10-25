'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DataAdmin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DataAdmin.init({
    namaLengkap: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    noHp: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DataAdmin',
  });
  return DataAdmin;
};