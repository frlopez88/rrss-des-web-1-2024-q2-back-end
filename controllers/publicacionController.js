import { db } from "../db/cn.js";

const creacionPublicacion = async (req, res) => {

    console.log(req.body);
    const { descripcion } = req.body;
    const user = req.user;
    const nombre_usuario = user.nombre_usuario;
    const { mimetype, originalname, buffer } = req.file;

    const sql = `insert into tbl_publicaciones 
        (descripcion,nombre_usuario, foto, nombre_foto, mime_type )
        values 
        ($1, $2, $3, $4, $5)
        returning id_publicacion, descripcion`;

    const params = [descripcion, nombre_usuario, buffer, originalname, mimetype];

    const result = await db.query(sql, params)

    res.json({mensaje:"Insercion Exitosa", obj_insertado: result});

};
const getPublicaciones = async (req, res) => {

    const sql = ` select id_publicacion, 
                         descripcion, 
                         nombre_usuario, 
                         encode(foto, 'base64') foto
                  from  tbl_publicaciones 
                  where activo = true
                  order by fecha_publicacion desc `

    const result = await db.query(sql);

    if (result.length === 0){
        res.status(404).json( {mensaje :"No hay publicaciones"} )
        return ;
    }

    res.json(result);

};
const getUsuarioPublicaciones = (req, res) => {


};

const getPublicacio2Usuarios = async (req, res)=>{


    const {usuario_1, usuario_2} = req.params;

    const params= [usuario_1, usuario_2];

    const sql  = `select id_publicacion, 
                         descripcion, 
                         nombre_usuario
                         from tbl_publicaciones 
                  where activo = true
                  and nombre_usuario in ($1, $2)
                  order by fecha_publicacion desc`;


    const result = await db.query(sql, params);

    res.json(result);


}

export {
    creacionPublicacion,
    getPublicaciones,
    getUsuarioPublicaciones, 
    getPublicacio2Usuarios
}

