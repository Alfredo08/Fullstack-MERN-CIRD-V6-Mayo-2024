const mongoose = require('mongoose');

const ColeccionCursos = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'Por favor proporciona el nombre del curso'],
        minLength: [3, 'Por favor proporciona un nombre real.']
    },
    clave: {
        type: String,
        unique: true,
        require: [true, 'Por favor proporciona la clave del curso'],
        minLength: [5, 'Cada curso requiere de 5 caracteres en formato AA-111']
    }
},
{timestamps: true});

const Cursos = mongoose.model('cursos', ColeccionCursos);

module.exports = {
    Cursos,
    ColeccionCursos
}