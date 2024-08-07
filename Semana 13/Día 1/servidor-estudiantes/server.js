const express = require('express');
const app = express();
const cors = require('cors');
const validarToken = require('./middlewares/validarToken');

const RouterEstudiantes = require('./rutas/routerEstudiantes');
const RouterCursos = require('./rutas/routerCursos');

require('./configuracion/baseDatos');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/estudiante', RouterEstudiantes);
app.use('/curso', validarToken, RouterCursos);

app.listen(8080, () => {
    console.log('El servidor ya está encendido en el puerto 8080.');
});