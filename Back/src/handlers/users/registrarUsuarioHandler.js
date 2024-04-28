const {
  registrarUsuarioController,
} = require("../../controllers/index.controller");

const registrarUsuarioHandler = async (req, res) => {
  try {
    const { usuario, email, password, roles } = req.body;
    console.log("tipo de dato el password: ", typeof password);
    const registro = await registrarUsuarioController({
      usuario,
      email,
      password,
      roles,
    });
    res.status(200).json(registro);
  } catch (error) {
    res.status(500).json({ message: "Error del servidor" });
  }
};

module.exports = registrarUsuarioHandler;
