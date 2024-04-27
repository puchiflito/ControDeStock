const todosLosProductos = require("./puductos/todosLosProductos.controller");
const crearProducto = require("./puductos/crearProducto.controller");
const actualizarProducto = require("./puductos/actualizarProducto.controller");
const productoIdController = require("./puductos/productoId.controller");
module.exports = {
  todosLosProductos,
  crearProducto,
  actualizarProducto,
  productoIdController,
};
