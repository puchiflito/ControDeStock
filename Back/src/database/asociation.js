const stock = require("../models/stock");
const users = require("../models/user");

stock.belongsToMany(users, { through: "user-stock" });
users.belongsToMany(stock, { through: "user-stock" });

module.exports = { stock, users };
