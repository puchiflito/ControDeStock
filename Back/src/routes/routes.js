const { Router } = require("express");
const {
  prouctoHandler,
  crearProductoHandler,
} = require("../handlers/index.handler");

const router = Router();

router.get("/", (req, res) => {
  res.send("Tu Control de stock");
});

// PRODUCTOS

router.get("/productos", prouctoHandler);
router.post("/productos", crearProductoHandler);
module.exports = router;
