const todosLosProductos = require("./puductos/todosLosProductos.controller");
const crearProducto = require("./puductos/crearProducto.controller");
const actualizarProducto = require("./puductos/actualizarProducto.controller");
const productoIdController = require("./puductos/productoId.controller");
const productoBorradoController = require("./puductos/borrarProducto.controller");
// usuarios
const registrarUsuarioController = require("./usuarios/registarUsuario.controller");
module.exports = {
  todosLosProductos,
  crearProducto,
  actualizarProducto,
  productoIdController,
  productoBorradoController,
  registrarUsuarioController,
};
