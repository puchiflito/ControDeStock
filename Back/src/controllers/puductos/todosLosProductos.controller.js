const stock = require("../../models/stock");

const todosLosProductos = async () => {
  const productos = await stock.findAll();
  return productos;
};

module.exports = todosLosProductos;
