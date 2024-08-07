const ControladorCursos = require('./../controladores/controladorCursos');
const express = require('express');
const RouterCursos = express.Router();

RouterCursos.post('/nuevo', ControladorCursos.agregarCurso);
RouterCursos.get('/', ControladorCursos.todosLosCursos);

module.exports = RouterCursos;