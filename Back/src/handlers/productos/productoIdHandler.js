const { productoIdController } = require("../../controllers/index.controller");

const productoIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await productoIdController({ id });

    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({
      message: `ERROR AL ENCONTRAR ESTE ID: ${id} de producto: ${error}`,
    });
  }
};

module.exports = productoIdHandler;
