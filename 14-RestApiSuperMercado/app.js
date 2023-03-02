const express = require("express");
const app = express();
const morgan = require("morgan")
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv/config")

app.use(cors());
app.options("*", cors());

//Middleware
app.use(express.json());
app.use(morgan("tiny"));

//Rutas
const categoriasRutas = require("./routes/categorias")
const productosRutas = require("./routes/productos")
const usuariosRutas = require("./routes/usuarios")
const ordenesRutas = require("./routes/ordenes")

const api = process.env.API_URL;

app.use(`${api}/categorias`, categoriasRutas);
app.use(`${api}/productos`, productosRutas);
app.use(`${api}/usuarios`, usuariosRutas);
app.use(`${api}/ordenes`, ordenesRutas);

//Database
// mongoose
//   .connect(process.env.CONNECTION_STRING, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     dbName: "eshop-database",
//   })
//   .then(() => {
//     console.log("Base de datos conectada");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//server
app.listen(3000, () => {
  console.log("Servidor corriendo puerto 3000")
});