const stock = require("../models/stock");
const users = require("../models/user");
const roles = require("../models/roles");

stock.belongsToMany(users, { through: "user-stock" });
users.belongsToMany(stock, { through: "user-stock" });
users.belongsTo(roles);

module.exports = { stock, users, roles };
