const jwt = require('jsonwebtoken');
const clave = "esto_es_secreto";

const validarToken = (req, res, next) => {
    const token_usuario = req.headers.token_usuario;

    jwt.verify(token_usuario, clave, (error, decodificado) => {
        if(error){
            return res.status(401).json({mensaje: "No autorizado para ver este contenido."});
        }
        req.infoEstudiante = {
            nombre: decodificado.nombre,
            apellido: decodificado.apellido,
            correo: decodificado.correo
        }
        next();
    });
}

module.exports = validarToken;