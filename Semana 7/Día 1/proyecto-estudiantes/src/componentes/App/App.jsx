import { useState } from "react";
import Estudiante from "../Estudiante/Estudiante";
import FormularioEstudiante from "../FormularioEstudiante/FormularioEstudiante";

const App = () => {
  const estudiantesIniciales = [{
    nombre: "Alex",
    apellido: "Miller",
    edad: 25,
    curso: "MERN"
  },
  {
    nombre: "Martha",
    apellido: "Gómez",
    edad: 23,
    curso: "Fundamentos de la Web"
  }];

  const [listaEstudiantes, setListaEstudiantes] = useState(estudiantesIniciales);

  const actualizarListaEstudiantes = (nuevoEstudiante) => {
    setListaEstudiantes([...listaEstudiantes, nuevoEstudiante]);
  }

  const eliminarEstudianteDeLaLista = (nombre, apellido) => {
    const listaTemporal = [...listaEstudiantes];
    for(let i = 0; i < listaTemporal.length; i ++){
      if(listaTemporal[i].nombre === nombre && listaTemporal[i].apellido === apellido){
        listaTemporal.splice(i, 1);
      }
    }
    setListaEstudiantes(listaTemporal);
  }

  return(
    <>
      <h1> Aplicación de estudiantes </h1>
      <FormularioEstudiante actualizarListaEstudiantes={actualizarListaEstudiantes} />
      <h2> Lista de estudiantes </h2>
      {
        listaEstudiantes.map((estudiante) => {
          return (<Estudiante nombre={estudiante.nombre}
                              apellido={estudiante.apellido}
                              edad={estudiante.edad}
                              curso={estudiante.curso}
                              eliminarEstudianteDeLaLista={eliminarEstudianteDeLaLista}/>)
        })
      }
    </>
  );
}

export default App;