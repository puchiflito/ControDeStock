const prouctoHandler = require("./productos/todosLosProductos.handler");
const crearProductoHandler = require("./productos/crearPrductoHandler");
const actualizarProductoHandler = require("./productos/actualizarProductoHandler");
const productoIdHandler = require("./productos/productoIdHandler");
const borrarProductoHandler = require("./productos/borrarProductoHandler");
// USUARIO
const registrarUsuarioHandler = require("./users/registrarUsuarioHandler");

module.exports = {
  prouctoHandler,
  crearProductoHandler,
  actualizarProductoHandler,
  productoIdHandler,
  borrarProductoHandler,
  registrarUsuarioHandler,
};
