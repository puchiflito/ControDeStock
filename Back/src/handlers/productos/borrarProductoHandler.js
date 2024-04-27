const {
  productoBorradoController,
} = require("../../controllers/index.controller");

const borrarProductoHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const producto = await productoBorradoController({ id });

    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ message: "NO SE PUEDDE BORRAR: ", error });
  }
};

module.exports = borrarProductoHandler;
