
const calificacion = 9.8;
let mensaje = "";

if(calificacion >= 8.0){
    mensaje = "¡Felicidades, aprobaste el examen!";
}
else{
    mensaje = "Necesitas rendir un intento más.";
}

const mensajeTernario = (calificacion >= 8.0) ? "¡Felicidades, aprobaste el examen!" : "Necesitas rendir un intento más.";
console.log(mensajeTernario);