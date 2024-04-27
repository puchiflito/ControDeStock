const { todosLosProductos } = require("../../controllers/index.controller");

const productoHandler = async (req, res) => {
  try {
    const producto = await todosLosProductos();
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ message: "Error: ", error });
  }
};

module.exports = productoHandler;
