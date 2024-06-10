
class Estudiante{
    // Método constructor
    constructor(nombre, apellido, edad, curso){
        // Atributos == propiedad
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.curso = curso
    }

    // Método
    imprimeInformacion(){
        console.log("Nombre completo:", this.nombre, this.apellido);
        console.log("Edad:", this.edad);
        console.log("Curso:", this.curso);
        console.log("----------");
    }
}

class EstudiantePosgrado extends Estudiante{
    constructor(nombre, apellido, edad, curso, especialidad, universidad){
        super(nombre, apellido, edad, curso);
        this.especialidad = especialidad;
        this.universidad = universidad;
    }

    imprimeDatos(){
        super.imprimeInformacion();
        console.log("Universidad", this.universidad);
        console.log("Espcialidad", this.especialidad);
    }
}

const alex = new Estudiante("Alex", "Miller", 25, "MERN");
const martha = new Estudiante("Martha", "Gómez", 22, "Fundamentos de la Web");
const alan = new Estudiante("Alan", "Morales", 24, "Python");
const julieta = new EstudiantePosgrado("Julieta", "Garza", 29, "Desarrollo Web", "Ingeniería de Software", "Oxford");

console.log(julieta);
julieta.imprimeDatos();

/*
alex.imprimeInformacion();
martha.imprimeInformacion();
alan.imprimeInformacion();
*/
