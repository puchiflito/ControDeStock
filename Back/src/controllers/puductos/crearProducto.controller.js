const stock = require("../../models/stock");

const crearProducto = async ({ nombre, precio, descripcion, descuento }) => {
  const producto = await stock.create({
    nombre,
    precio,
    descripcion,
    descuento,
  });

  return producto;
};

module.exports = crearProducto;
