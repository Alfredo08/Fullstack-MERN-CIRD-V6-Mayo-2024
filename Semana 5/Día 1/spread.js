
const estudiante = {
    nombre: "Alex",
    apellido: "Miller",
    edad: 25,
    curso: "MERN"
};

const persona = {
    ...estudiante,
    nombre: "Roberto"
}

console.log(estudiante);
console.log(persona);

const nombres = ["Alex", "Martha", "Alan", "Julieta"];

const nombres2 = ["Mariana", ...nombres, "Roberto"]

console.log(nombres);
console.log(nombres2);