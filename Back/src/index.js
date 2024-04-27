const app = require("./app");
const { conexionDBUser, conexionDBStock } = require("./database/database");

const server = async () => {
  try {
    await conexionDBUser.sync();
    await conexionDBStock.sync();
    app.listen(3000);
    console.log("Servidor levantado y Conexion a las DB Listo");
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

server();
