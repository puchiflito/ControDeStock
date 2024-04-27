const prouctoHandler = require("./productos/todosLosProductos.handler");
const crearProductoHandler = require("./productos/crearPrductoHandler");
const actualizarProductoHandler = require("./productos/actualizarProductoHandler");
const productoIdHandler = require("./productos/productoIdHandler");
const borrarProductoHandler = require("./productos/borrarProductoHandler");

module.exports = {
  prouctoHandler,
  crearProductoHandler,
  actualizarProductoHandler,
  productoIdHandler,
  borrarProductoHandler,
};
