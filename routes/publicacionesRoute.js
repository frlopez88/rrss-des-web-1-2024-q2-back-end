import express from 'express';
const publicacion = express();
import {
    creacionPublicacion,
    getPublicaciones,
    getUsuarioPublicaciones, 
    getPublicacio2Usuarios
} from '../controllers/publicacionController.js';
import multer from 'multer';
//middleware 

const storage = multer.memoryStorage();
const upload = multer({ storage: storage })

//Metdodo para creacion de publicacions
publicacion.post('', upload.single('imagen') , creacionPublicacion);

publicacion.get('', getPublicaciones);

publicacion.get('/:nombre_usuario', getUsuarioPublicaciones);

publicacion.get('/:usuario_1/:usuario_2', getPublicacio2Usuarios);

export { publicacion }