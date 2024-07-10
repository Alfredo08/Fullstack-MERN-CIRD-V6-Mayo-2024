const mongoose = require('mongoose');

const ColleccionEstudiantes = mongoose.Schema({
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    curso: {
        type: String
    },
    correo: {
        type: String
    },
    edad: {
        type: Number
    }
});

const Estudiantes = mongoose.model('estudiantes', ColleccionEstudiantes);

module.exports = Estudiantes;
