/*
    1. ()
    2. !
    3. * / %
    4. + -
    5. > >= < <= === !==
    6. && ||
    7. = ++ -- *= /= %/
*/

let calificacion = 10.0;
let califcacion2 = 8.7;
let califcacion3 = 6.7;

if(calificacion >= 8.0){
    console.log("¡Has aprobado tu examen!");
    if(calificacion === 10.0){
        console.log("Obtuviste la nota más alta posible.");
    }
}
else{
    console.log("No aprobaste tu examen."); 
}

if(calificacion >= 8.0 && califcacion2 >= 8.0 && califcacion3 >= 8.0){
    // true && true && false
       //  true && false
            // true
    console.log("Has aprobado todos los exámenes.");
}
else{
    console.log("Algún examen necesitas retomarlo.")
}


console.log("Finalizando la expresión.");