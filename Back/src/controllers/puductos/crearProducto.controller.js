const Stock = require("../../models/stock");

const crearProducto = async ({ nombre, precio, descripcion, descuento }) => {
  const producto = await Stock.create({
    nombre,
    precio,
    descripcion,
    descuento,
  });

  return producto;
};

module.exports = crearProducto;
