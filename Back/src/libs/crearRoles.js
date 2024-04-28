const Role = require("../models/roles"); // Importa el modelo Role

const crearRoles = async () => {
  try {
    const roles = await Role.findAll(); // Verifica si hay algún rol existente
    if (roles.length > 0) {
      console.log("Roles creados: ", roles.length);
      return;
    }

    const crearRoles = await Promise.all([
      Role.create({ name: "admin" }),
      Role.create({ name: "user" }),
      Role.create({ name: "moderator" }),
    ]);

    console.log("Roles creados: ", crearRoles);
  } catch (error) {
    console.log("ERROR AL CREAR LOS ROLES: ", error);
  }
};

module.exports = crearRoles;
