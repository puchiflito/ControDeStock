const { DataTypes } = require("sequelize");
const { conexionDBStock } = require("../database/database");
const { v4: uuid } = require("uuid");

const stock = conexionDBStock.define("stock", {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuid(),
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descuento: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = stock;
