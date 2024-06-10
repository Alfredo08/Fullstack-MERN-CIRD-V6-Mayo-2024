const despliegaHola = () => console.log("Hola, ¿cómo estás?");

const informacion = (nombre, apellido, mensaje) => {
    console.log(nombre, apellido);
    mensaje();
}
/*
informacion("Alex", "Miller", despliegaHola);
informacion("Martha", "Gómez", () => console.log("Hola desde la función anónima"));
*/

const imprimeValor = (valor) => console.log(valor);

const nombres = ["Alex", "Martha", "Alan", "Julieta"];

nombres.forEach(imprimeValor);
console.log("----------");
nombres.forEach((nombre) => console.log(nombre));