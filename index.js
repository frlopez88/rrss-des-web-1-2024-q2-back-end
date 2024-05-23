import express from 'express';
const app = express();
import { usuario } from './routes/usuarioRoute.js';

//Configuraciones de Middleware 
app.use(express.json());


//cuerpo del proyecto 

app.use('/api/usuario', usuario);

//configuracion del puerto y levantar el servidor
const port = 3000;
app.listen(port, ()=>{

    console.log(`Escuchando en el puero ${port}`);

})