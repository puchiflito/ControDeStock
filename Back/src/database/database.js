const Sequelize = require("sequelize");
const { config } = require("dotenv");
config();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const conexionDBUser = new Sequelize("users", DB_USER, DB_PASSWORD, {
  host: "localhost",
  dialect: "postgres",
});

const conexionDBStock = new Sequelize("stock", DB_USER, DB_PASSWORD, {
  host: "localhost",
  dialect: "postgres",
});

module.exports = { conexionDBUser, conexionDBStock };
