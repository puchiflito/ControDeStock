const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/routes");
const crearRoles = require("./libs/crearRoles");

const app = express();
crearRoles();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(router);

module.exports = app;
