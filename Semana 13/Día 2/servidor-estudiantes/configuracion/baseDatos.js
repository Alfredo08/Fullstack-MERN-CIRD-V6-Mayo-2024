const mongoose = require('mongoose');

mongoose.connect('poner su url de base de datos aquí')
    .then(() => {
        console.log("Conexión exitosa a la base de datos 'estudiantes_db'");
    })
    .catch((error) => {
        console.log(`Hubo un error al conectar con la base de datos: ${error}`);
    });