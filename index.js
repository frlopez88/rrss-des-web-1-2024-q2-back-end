import express from 'express';
const app = express();
import { usuario } from './routes/usuarioRoute.js';
import cors from 'cors'

//Configuraciones de Middleware 
app.use(express.json());
app.use(cors())
//cuerpo del proyecto 

app.use('/api/usuario', usuario);

//configuracion del puerto y levantar el servidor
const port = 3000;
app.listen(port, ()=>{

    console.log(`Escuchando en el puero ${port}`);

})