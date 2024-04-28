const Stock = require("../../models/stock");

const productoIdController = async ({ id }) => {
  try {
    const producto = await Stock.findOne({
      where: {
        id: id,
      },
    });
    return producto;
  } catch (error) {
    return `Error con el id ${id} del producto: ${error}`;
  }
};

module.exports = productoIdController;
