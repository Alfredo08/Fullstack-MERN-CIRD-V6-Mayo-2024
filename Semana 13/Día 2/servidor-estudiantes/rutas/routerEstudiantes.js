const express = require('express');
const ControladorEstudiantes = require('./../controladores/controladorEstudiantes');
const routerEstudiantes = express.Router();
const validarToken = require('./../middlewares/validarToken');

routerEstudiantes.get('/', validarToken, ControladorEstudiantes.todosLosEstudiantes);
routerEstudiantes.get('/:correo', validarToken, ControladorEstudiantes.obtenerPorCorreo);
routerEstudiantes.post('/nuevo', ControladorEstudiantes.agregarEstudiante);
routerEstudiantes.put('/actualizar/:correo', validarToken, ControladorEstudiantes.actualizarEstudiante);
routerEstudiantes.delete('/eliminar/:correo', validarToken, ControladorEstudiantes.removerEstudiante);
routerEstudiantes.put('/agregar/curso', validarToken, ControladorEstudiantes.agregarCurso);
routerEstudiantes.post('/login', ControladorEstudiantes.login);

module.exports = routerEstudiantes;