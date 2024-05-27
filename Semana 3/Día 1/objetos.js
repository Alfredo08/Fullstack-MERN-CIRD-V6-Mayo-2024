
let estudiante = {
    nombre: "Alejandro",
    apellido: "Miller",
    edad: 24,
    curso: "Fundamentos de la Web",
    calificaciones: [9.8, 7.6],
    lenguajes: {
        lenguaje1: "JavaScript",
        lenguaje2: "Python"
    }
};

console.log(estudiante);
console.log(estudiante.nombre, estudiante['nombre']);
let propiedad = "curso";

console.log(estudiante[propiedad]);

console.log(estudiante.calificaciones[1]);
console.log(estudiante.lenguajes.lenguaje2);