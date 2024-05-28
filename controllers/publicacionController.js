import { db } from "../db/cn.js";

const creacionPublicacion = async (req, res, next) => {

    const { descripcion, nombre_usuario } = req.body;
    const { mimetype, originalname, buffer } = req.file;

    console.log(req.file);

    const sql = `insert into tbl_publicaciones 
        (descripcion,nombre_usuario, foto, nombre_foto, mime_type )
        values 
        ($1, $2, $3, $4, $5)
        returning id_publicacion, descripcion`;

    const params = [descripcion, nombre_usuario, buffer, originalname, mimetype];

    const result = await db.query(sql, params)

    res.json({mensaje:"Insercion Exitosa", obj_insertado: result});

};
const getPublicaciones = (req, res) => {


};
const getUsuarioPublicaciones = (req, res) => {


};

export {
    creacionPublicacion,
    getPublicaciones,
    getUsuarioPublicaciones
}

