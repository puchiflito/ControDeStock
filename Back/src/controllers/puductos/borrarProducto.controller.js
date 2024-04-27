const stock = require("../../models/stock");

const borrarProductoController = async ({ id }) => {
  try {
    const producto = await stock.findByPk(id);
    const productoBorrado = await producto.destroy({
      where: {
        id: id,
      },
    });
    return productoBorrado;
  } catch (error) {
    return `ERROR AL BORRAR: ${error}`;
  }
};

module.exports = borrarProductoController;
