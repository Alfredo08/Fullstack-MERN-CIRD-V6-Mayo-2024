const {Cursos} = require('./../modelos/modeloCursos');

module.exports.agregarCurso = (req, res) => {
    const {nombre, clave} = req.body;

    if(!nombre || !clave){
        res.statusMessage = 'Por favor enviar el nombre y clave del curso.';
        return res.status(400).json({mensaje: 'Por favor enviar el nombre y clave del curso.'});
    }

    Cursos.create(req.body)
        .then((cursoNuevo) => {
            return res.status(201).json(cursoNuevo);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
}

module.exports.todosLosCursos = (req, res) => {
    Cursos.find()
        .then((listaCursos) => {
            return res.status(200).json(listaCursos);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
}