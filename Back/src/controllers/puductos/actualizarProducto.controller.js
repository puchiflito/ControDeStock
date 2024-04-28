const Stock = require("../../models/stock");

const actualizarProducto = async ({
  id,
  nombre,
  precio,
  descripcion,
  descuento,
}) => {
  try {
    const producto = await Stock.findByPk(id);
    if (!producto) return "No hay producto para modificar con ese id";
    await producto.update({ nombre, precio, descripcion, descuento });
    return producto;
  } catch (error) {
    return console.log("error al actualizar e producto: ", error);
  }
};

module.exports = actualizarProducto;
