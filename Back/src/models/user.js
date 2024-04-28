const { DataTypes } = require("sequelize");
const { conexionDBUser } = require("../database/database");
const { v4: uuid } = require("uuid");
const bcrypt = require("bcryptjs");

const Users = conexionDBUser.define("Users", {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuid(),
    primaryKey: true,
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roles: {
    type: DataTypes.STRING,
  },
});

//Encriptar password
Users.beforeCreate(async (user) => {
  if (user.password) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
});

Users.comparePassword = async (password, recivePassword) => {
  const passwordCompare = await bcrypt.compare(password, recivePassword);
  return passwordCompare;
};
module.exports = Users;
