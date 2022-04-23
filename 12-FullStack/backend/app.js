import express  from "express";
import dotenv from 'dotenv';
//import cors from "cors";
import conectarDB from "./config/db.js";
import veterinarioRoutes from "./routes/veterinarioRoutes.js";
import pacienteRoutes from "./routes/pacienteRoutes.js";


const app = express();

//de esta forma digo que estoy enviado datos tipo json
app.use(express.json());


//Conexion con la BD
dotenv.config();
conectarDB();

//Rutas
app.use("/api/veterinarios", veterinarioRoutes);
app.use("/api/pacientes", pacienteRoutes);

//Asiganacion del puerto
const PORT = process.env.PORT || 4000;


app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});