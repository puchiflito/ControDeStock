const { Router } = require("express");
const {
  prouctoHandler,
  crearProductoHandler,
  actualizarProductoHandler,
  productoIdHandler,
  borrarProductoHandler,
  registrarUsuarioHandler,
} = require("../handlers/index.handler");
const Roles = require("../models/roles");

const router = Router();

router.get("/", (req, res) => {
  res.send("Tu Control de stock");
});

//ROLES
router.get("/rol", async (req, res) => {
  try {
    const rol = await Roles.findAll();
    res.send(rol);
  } catch (error) {
    console.log("ERROR AL MOSTRAR LOS ROLES: ", error);
  }
});

// PRODUCTOS
router.get("/productos", prouctoHandler);
router.get("/productos/:id", productoIdHandler);
router.post("/productos", crearProductoHandler);
router.put("/productos/:id", actualizarProductoHandler);
router.delete("/productos/:id", borrarProductoHandler);

// USUARIOS
router.post("/usuario", registrarUsuarioHandler);
module.exports = router;
