const express = require('express');
const app = express();
const RouterEstudiantes = require('./rutas/routerEstudiantes');

require('./configuracion/baseDatos');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/estudiante', RouterEstudiantes);

app.listen(8080, () => {
    console.log('El servidor ya está encendido en el puerto 8080.');
});