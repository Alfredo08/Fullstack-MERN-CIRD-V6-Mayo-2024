
let numeros = [10, 20, 30, 40, 50];
            // 0   1   2   3   4  

console.log(numeros);
console.log(numeros[0]);
console.log(numeros[4]);
numeros[2] = 35;
console.log(numeros, numeros.length);

let nombres = ["Alex", "Martha", "Alan", "Julieta"];
            //   0        1        2         3

nombres.push("Roberto");

console.log(nombres, nombres.length);

nombres.pop();
nombres.pop();
nombres.pop();

console.log(nombres, nombres.length);

// .shift() .unshift() .splice()

let nombre = "Alejandro Miller";
console.log(nombre, nombre.length);