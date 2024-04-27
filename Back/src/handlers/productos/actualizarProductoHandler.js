const { actualizarProducto } = require("../../controllers/index.controller");

const actualizarProductoHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, precio, descripcion, descuento } = req.body;

    const actualizar = await actualizarProducto({
      id,
      nombre,
      precio,
      descripcion,
      descuento,
    });
    res.status(200).json(actualizar);
  } catch (error) {
    res.status(500).json({ message: "Error: ", error });
  }
};
module.exports = actualizarProductoHandler;
