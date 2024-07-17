const mongoose = require('mongoose');
const {ColeccionCursos} = require('./modeloCursos');

const ColleccionEstudiantes = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'Por favor proporciona el nombre.'],
        minLength: [3, 'Por favor proporciona un nombre real.']
    },
    apellido: {
        type: String,
        required: [true, 'Por favor proporciona el apellido.'],
        minLength: [3, 'Por favor proporciona un apellido real.']
    },
    correo: {
        type: String,
        required: [true, 'Por favor proporciona el correo.'],
        unique: true
    },
    edad: {
        type: Number,
        min: [18, 'Necesitas tener al menos 18 años para inscribirte.'],
        max: [120, 'A lo mucho necesitas tener 120 años para inscribirte.']
    },
    cursos: [ColeccionCursos]
},
{timestamps: true});

const Estudiantes = mongoose.model('estudiantes', ColleccionEstudiantes);

module.exports = Estudiantes;
