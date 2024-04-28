const Users = require("../../models/user");
const Roles = require("../../models/roles");
const jwt = require("jsonwebtoken");
const { config } = require("dotenv");
config();

const SECRET = process.env.SECRET;

const registrarUsuarioController = async ({
  usuario,
  email,
  password,
  roles,
}) => {
  try {
    const newUser = await Users.create({
      usuario,
      email,
      password,
    });

    let userRole;
    if (roles) {
      const buscarRole = await Roles.findOne({
        where: {
          name: roles,
        },
      });
      if (buscarRole) {
        userRole = buscarRole;
      } else {
        throw new Error("No se encontró el rol especificado");
      }
    } else {
      const defaultRol = await Roles.findOne({ where: { name: "user" } });
      userRole = defaultRol;
    }

    // Asignar el id del rol al usuario
    newUser.roleId = userRole.id;

    // Guardar el usuario en la base de datos
    await newUser.save();

    const token = jwt.sign({ id: newUser.id }, SECRET);
    console.log("Usuario creado: ", newUser);
    console.log("Su token es: ", token);
    return token;
  } catch (error) {
    console.log("ERROR AL REGISTRAR USUARIO: ", error);
    throw error;
  }
};

module.exports = registrarUsuarioController;
