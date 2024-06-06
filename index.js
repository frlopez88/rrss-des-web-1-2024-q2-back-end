import express from 'express';
const app = express();
import { usuario } from './routes/usuarioRoute.js';
import { publicacion } from './routes/publicacionesRoute.js';
import cors from 'cors'
import jwt from 'jsonwebtoken'


//Configuraciones de Middleware 
app.use(express.json());
app.use(cors());

const verificarToken = (req, res, next) => {

    const symbols = Object.getOwnPropertySymbols(req);
    // Encontrar el símbolo específico [Symbol(kHeaders)]
    const kHeadersSymbol = symbols.find(sym => sym.toString() === 'Symbol(kHeaders)');

    if (kHeadersSymbol) {
        const headers = req[kHeadersSymbol];
        const auth = headers.authorization;

        if (auth) {
            const auth_arr = auth.split(" ");
            const token = auth_arr[1];

            try {
                const tokenDecode = jwt.verify(token, 'secret')
                req.user = tokenDecode;
                next();
            } catch (err) {

                res.status(404).json(err.message)

            }
        }else {
            return res.status(403).json({ mensaje: "Se requiere un token, para acceder al metodo" })
        }

    } 

};


//cuerpo del proyecto 

app.use('/api/usuario', usuario);

app.use('/api/publicacion', verificarToken, publicacion)

//configuracion del puerto y levantar el servidor
const port = 3000;
app.listen(port, () => {

    console.log(`Escuchando en el puero ${port}`);

})