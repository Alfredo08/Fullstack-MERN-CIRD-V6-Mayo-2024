const Estudiantes = require('./../modelos/modeloEstudiantes');
const {Cursos} = require('./../modelos/modeloCursos');

module.exports.todosLosEstudiantes = (req, res) => {
    Estudiantes.find()
        .then((listaEstudiantes) => {
            return res.status(200).json(listaEstudiantes);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
};

module.exports.obtenerPorCorreo = (req, res) => {
    Estudiantes.findOne({correo: req.params.correo})
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
            return res.status(201).json(nuevoUsuario);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
};

module.exports.agregarCurso = (req, res) => {
    Cursos.findOne({clave: req.body.clave})
        .then((cursoEncotrado) => {
            if(!cursoEncotrado){
                res.statusMessage = 'Curso no encontrado.';
                return res.status(404).json({mensaje: 'Curso no encontrado.'});
            }
            Estudiantes.findOneAndUpdate({correo: req.body.correo}, {$push: {cursos: cursoEncotrado}}, {new: true})
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

    Estudiantes.findOneAndUpdate({correo: req.params.correo}, camposParaActualizar, {new: true})
        .then((estudianteActualizado) => {
            return res.status(200).json(estudianteActualizado);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
};

module.exports.removerEstudiante = (req, res) => {
    Estudiantes.findOneAndDelete({correo: req.params.correo})
        .then(() => {
            return res.status(204).end();
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
};