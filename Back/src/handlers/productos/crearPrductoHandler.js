const { crearProducto } = require("../../controllers/index.controller");

const crearProductoHandler = async (req, res) => {
  try {
    const { nombre, precio, descripcion, descuento } = req.body;
    const crear = await crearProducto({
      nombre,
      precio,
      descripcion,
      descuento,
    });
    res.status(200).json(crear);
  } catch (error) {
    console.log("error del handler: ", error);
    res.status(500).json({ message: "Error: ", error });
  }
};

module.exports = crearProductoHandler;
