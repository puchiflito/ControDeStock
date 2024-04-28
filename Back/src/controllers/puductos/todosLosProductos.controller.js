const Stock = require("../../models/stock");

const todosLosProductos = async () => {
  const productos = await Stock.findAll();
  return productos;
};

module.exports = todosLosProductos;
