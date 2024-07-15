const express = require('express');
const ControladorEstudiantes = require('./../controladores/controladorEstudiantes');
const routerEstudiantes = express.Router();

routerEstudiantes.get('/', ControladorEstudiantes.todosLosEstudiantes);
routerEstudiantes.get('/:correo', ControladorEstudiantes.obtenerPorCorreo);
routerEstudiantes.post('/nuevo', ControladorEstudiantes.agregarEstudiante);
routerEstudiantes.put('/actualizar/:correo', ControladorEstudiantes.actualizarEstudiante);
routerEstudiantes.delete('/eliminar/:correo', ControladorEstudiantes.removerEstudiante);
routerEstudiantes.put('/agregar/curso', ControladorEstudiantes.agregarCurso);

module.exports = routerEstudiantes;