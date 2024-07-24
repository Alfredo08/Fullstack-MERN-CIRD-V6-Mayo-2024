const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/estudiantes_db')
    .then(() => {
        console.log("Conexión exitosa a la base de datos 'estudiantes_db'");
    })
    .catch((error) => {
        console.log(`Hubo un error al conectar con la base de datos: ${error}`);
    });