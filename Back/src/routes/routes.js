const { Router } = require("express");
const {
  prouctoHandler,
  crearProductoHandler,
  actualizarProductoHandler,
  productoIdHandler,
} = require("../handlers/index.handler");

const router = Router();

router.get("/", (req, res) => {
  res.send("Tu Control de stock");
});

// PRODUCTOS

router.get("/productos", prouctoHandler);
router.get("/productos/:id", productoIdHandler);
router.post("/productos", crearProductoHandler);
router.put("/productos/:id", actualizarProductoHandler);
module.exports = router;
