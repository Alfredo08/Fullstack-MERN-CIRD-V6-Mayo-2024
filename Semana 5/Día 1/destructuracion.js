
const estudiante = {
    nombre: "Alex",
    apellido: "Miller",
    edad: 25,
    curso: "MERN"
};

/*
const nombre = estudiante.nombre;
const apellido = estudiante.apellido;
const edad = estudiante.edad;
const curso = estudiante.curso;
*/

const {nombre, apellido, edad, curso} = estudiante;
console.log(nombre, apellido, edad, curso);

const nombres = ["Alex", "Martha", "Alan", "Julieta"];

const [primero, segundo, tercero, cuarto, quinto] = nombres;
console.log(primero, segundo, tercero, cuarto, quinto);

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
      {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
      },
      {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
      }
    ],
    createdAt: 1543945177623
  };

const {addresses: [washington, london]} = person;

console.log(washington.city);
console.log(london.city);
// console.log(person.addresses[0].city);