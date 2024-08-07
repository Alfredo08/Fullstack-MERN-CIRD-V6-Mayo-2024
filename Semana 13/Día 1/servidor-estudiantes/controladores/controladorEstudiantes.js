const Estudiantes = require('./../modelos/modeloEstudiantes');
const {Cursos} = require('./../modelos/modeloCursos');
const jwt = require('jsonwebtoken');
const clave = "esto_es_secreto";

module.exports.todosLosEstudiantes = (req, res) => {
    console.log(req.infoEstudiante);
    Estudiantes.find()
        .then((listaEstudiantes) => {
            return res.status(200).json(listaEstudiantes);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
};

module.exports.obtenerPorCorreo = (req, res) => {
    Estudiantes.findOne({correo: req.infoEstudiante.correo})
        .then((estudianteEncontrado) => {
            if(! estudianteEncontrado){
                res.statusMessage = 'Estudiante no encontrado.';
                return res.status(404).json({mensaje: 'Estudiante no encontrado.'}); 
            }

            return res.status(200).json(estudianteEncontrado);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
};

module.exports.agregarEstudiante = (req, res) => {
    Estudiantes.create(req.body)
        .then((nuevoUsuario) => {
            const infoEnToken = {
                nombre: nuevoUsuario.nombre,
                apellido: nuevoUsuario.apellido,
                correo: nuevoUsuario.correo
            }

            jwt.sign(infoEnToken, clave, {expiresIn: '1m'}, (error, token) => {
                if(error){
                    return res.status(400).json({mensaje: 'Error al generar el token'});
                }
                return res.status(200).json({token});
            });
        })
        .catch((error) => {
            console.log(error.message);
            res.statusMessage = error.message;
            return res.status(400).json(error.message);
        });
};

module.exports.agregarCurso = (req, res) => {
    Cursos.findOne({clave: req.body.clave})
        .then((cursoEncotrado) => {
            if(!cursoEncotrado){
                res.statusMessage = 'Curso no encontrado.';
                return res.status(404).json({mensaje: 'Curso no encontrado.'});
            }
            Estudiantes.findOneAndUpdate({correo: req.infoEstudiante.correo}, {$push: {cursos: cursoEncotrado}}, {new: true})
                .then((estudianteActualizado) => {
                    return res.status(200).json(estudianteActualizado);
                })
                .catch((error) => {
                    return res.status(400).json(error);
                });
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
}

module.exports.actualizarEstudiante = (req, res) => {
    const camposParaActualizar = {};
    const {nombre, apellido, edad} = req.body;
    
    if(nombre){
        camposParaActualizar.nombre = nombre;
    }

    if(apellido){
        camposParaActualizar.apellido = apellido;
    }

    if(edad){
        camposParaActualizar.edad = edad;
    }

    Estudiantes.findOneAndUpdate({correo: req.infoEstudiante.correo}, camposParaActualizar, {new: true})
        .then((estudianteActualizado) => {
            return res.status(200).json(estudianteActualizado);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
};

module.exports.removerEstudiante = (req, res) => {
    Estudiantes.findOneAndDelete({correo: req.infoEstudiante.correo})
        .then(() => {
            return res.status(204).end();
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
};

module.exports.login = (req, res) => {
    const {correo, password} = req.body;
    
    Estudiantes.findOne({correo, password})
        .then((estudianteEncontrado) => {
            if(! estudianteEncontrado){
                res.statusMessage = 'Credenciales incorrectas.';
                return res.status(404).json({mensaje: 'Credenciales incorrectas.'});
            }
            
            const infoEnToken = {
                nombre: estudianteEncontrado.nombre,
                apellido: estudianteEncontrado.apellido,
                correo: estudianteEncontrado.correo
            }

            jwt.sign(infoEnToken, clave, {expiresIn: '1m'}, (error, token) => {
                if(error){
                    return res.status(400).json({mensaje: 'Error al generar el token'});
                }
                return res.status(200).json({token});
            });
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
}