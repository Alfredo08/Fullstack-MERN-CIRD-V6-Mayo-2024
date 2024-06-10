
const sumaNumeros = (...numeros) => {
    let suma = 0;
    // numeros.forEach((num) => suma += num);
    for(let i = 0; i < numeros.length; i ++){
        suma += numeros[i];
    }
    return suma;
}


console.log(sumaNumeros(1, 2, 3, 4, 5));
console.log(sumaNumeros(10, 20, 30));