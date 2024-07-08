const express = require('express');
const app = express();

const estudiantes = [{
    nombre: 'Alex',
    apellido: 'Miller',
    edad: 24,
    curso: 'MERN',
    id: 123
},
{
    nombre: 'Martha',
    apellido: 'Gómez',
    edad: 23,
    curso: 'Fundamentos de la web',
    id: 456
},
{
    nombre: 'Roger',
    apellido: 'Infante',
    edad: 22,
    curso: 'Python',
    id: 789
}];

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// http://localhost:8080/hola_mundo
app.get('/hola_mundo', (req, res) => {
    return res.status(200).json({mensaje: 'Hola desde el servidor.'});
});

app.get('/estudiantes', (req, res) => {
    return res.status(200).json(estudiantes);
});

app.get('/estudiante/:id', (req, res) => {
    const id = Number(req.params.id);
    const estudianteEncontrado = estudiantes.find((estudiante) => estudiante.id === id);

    if(! estudianteEncontrado){
        res.statusMessage = 'Estudiante no encontrado.';
        return res.status(404).json({mensaje: 'Estudiante no encontrado.'}); 
    }

    return res.status(200).json(estudianteEncontrado);
});

app.post('/estudiante/nuevo', (req, res) => {
    const {id, nombre, apellido, edad, curso} = req.body;

    if(!id || !nombre || !apellido || !edad || !curso){
        res.statusMessage = 'Por favor proporcionar id, nombre, apellido, edad, curso';
        return res.status(406).json({mensaje: 'Por favor proporcionar id, nombre, apellido, edad, curso'})
    }

    const estudianteEncontrado = estudiantes.find((estudiante) => estudiante.id === id);

    if(estudianteEncontrado){
        res.statusMessage = 'Este id ya está asignado a un estudiante, enviar otro distinto.';
        res.status(406).json({mensaje: 'Este id ya está asignado a un estudiante, enviar otro distinto.'});
    }

    estudiantes.push(req.body);

    return res.status(201).json(req.body);
});

app.put('/estudiante/actualizar/:id', (req, res) => {
    const id = Number(req.params.id);
    const estudianteEncontrado = estudiantes.find((estudiante) => estudiante.id === id);

    if(! estudianteEncontrado){
        res.statusMessage = 'Estudiante no encontrado.';
        return res.status(404).json({mensaje: 'Estudiante no encontrado.'}); 
    }
    const estudianteActualizado = {
        ...estudianteEncontrado,
        ...req.body
    }

    const indiceDeEstudiante = estudiantes.findIndex((estudiante) => estudiante.id === id);
    estudiantes[indiceDeEstudiante] = estudianteActualizado;

    return res.status(200).json(estudianteActualizado);
});

app.delete('/estudiante/eliminar/:id', (req, res) => {
    const id = Number(req.params.id);
    const estudianteEncontrado = estudiantes.find((estudiante) => estudiante.id === id);

    if(! estudianteEncontrado){
        res.statusMessage = 'Estudiante no encontrado.';
        return res.status(404).json({mensaje: 'Estudiante no encontrado.'}); 
    }
    const indiceDeEstudiante = estudiantes.findIndex((estudiante) => estudiante.id === id);

    estudiantes.splice(indiceDeEstudiante, 1);
    return res.status(204).end();
});


// http://localhost:8080/
app.listen(8080, () => {
    console.log('El servidor ya está encendido en el puerto 8080.');
});