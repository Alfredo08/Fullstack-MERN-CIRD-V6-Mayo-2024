const Estudiantes = require('./../modelos/modeloEstudiantes');

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
    const {correo, nombre, apellido, edad, curso} = req.body;

    if(!correo || !nombre || !apellido || !edad || !curso){
        res.statusMessage = 'Por favor proporcionar id, nombre, apellido, edad, curso';
        return res.status(406).json({mensaje: 'Por favor proporcionar id, nombre, apellido, edad, curso'})
    }

    Estudiantes.create(req.body)
        .then((nuevoUsuario) => {
            return res.status(201).json(nuevoUsuario);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
};

module.exports.actualizarEstudiante = (req, res) => {
    const camposParaActualizar = {};
    const {nombre, apellido, curso, edad} = req.body;
    
    if(nombre){
        camposParaActualizar.nombre = nombre;
    }

    if(apellido){
        camposParaActualizar.apellido = apellido;
    }

    if(edad){
        camposParaActualizar.edad = edad;
    }

    if(curso){
        camposParaActualizar.curso = curso;
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