const { DataTypes } = require("sequelize");
const { conexionDBUser } = require("../database/database");
const { v4: uuid } = require("uuid");

const Roles = conexionDBUser.define("roles", {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuid(),
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = Roles;
