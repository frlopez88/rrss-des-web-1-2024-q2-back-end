import express from 'express';
const publicacion = express();
import {
    creacionPublicacion,
    getPublicaciones,
    getUsuarioPublicaciones
} from '../controllers/publicacionController.js';
import multer from 'multer';
//middleware 

const storage = multer.memoryStorage();
const upload = multer({ storage: storage })

//Metdodo para creacion de publicacions
publicacion.post('', upload.single('imagen') , creacionPublicacion);

publicacion.get('', getPublicaciones);

publicacion.get('/:nombre_usuario', getUsuarioPublicaciones);

export { publicacion }