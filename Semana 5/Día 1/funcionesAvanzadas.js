const estudiantes = [
    {
        nombre: "Alex",
        apellido: "Miller",
        edad: 24,
        id: 123
    },
    {
        nombre: "Martha",
        apellido: "Gómez",
        edad: 22,
        id: 456
    },
    {
        nombre: "Alan",
        apellido: "Rodríguez",
        edad: 23,
        id: 454  
    },
    {
        nombre: "Martha",
        apellido: "Morales",
        edad: 26,
        id: 789
    }
];

// Funcion .find()
const estudianteEncontrado = estudiantes.find((estudiante) => estudiante.id === 456);
console.log(estudianteEncontrado);

// Funcion .filter()
const estudiantesFiltrados = estudiantes.filter((estudiante) => estudiante.nombre === "Martha");
console.log(estudiantesFiltrados);

// Funcion .map()
const nombres = estudiantes.map((estudiante) => estudiante.nombre + " " + estudiante.apellido);

console.log(nombres);
console.log(estudiantes);

const soloMarthas = estudiantesFiltrados.map((estudiante) => estudiante.nombre + " " + estudiante.apellido);
console.log(soloMarthas);