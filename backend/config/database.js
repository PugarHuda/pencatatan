const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("ttv", "root", null, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
