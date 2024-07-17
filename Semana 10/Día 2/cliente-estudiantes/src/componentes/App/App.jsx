import { useState } from "react";
import ListaEstudiantes from "../ListaEstudiantes/ListaEstudiantes";
import { Route, Routes, Link } from "react-router-dom";
import Estudiante from "../Estudiante/Estudiante";
import Error from "../Error/Error";
import FormularioEstudiante from './../FormularioEstudiante/FormularioEstudiante';
import { useEffect } from "react";
import axios from "axios";

const App = () => {
  const [listaEstudiantes, setListaEstudiantes] = useState([]);

  const actualizarListaEstudiantes = (nuevoEstudiante) => {
    setListaEstudiantes([...listaEstudiantes, nuevoEstudiante]);
  }

  const eliminarEstudianteDeLaLista = (id) => {
    const listaTemporal = [...listaEstudiantes];
    for(let i = 0; i < listaTemporal.length; i ++){
      if(listaTemporal[i].id == id){
        listaTemporal.splice(i, 1);
      }
    }
    setListaEstudiantes(listaTemporal);
  }

  useEffect(() => {
    const obtenerListaDeEstudiantes = async () => {
      const URL = "http://localhost:8080/estudiante";
      const respuesta = await axios.get(URL);
      setListaEstudiantes(respuesta.data);
    }

    obtenerListaDeEstudiantes();
  }, []);

  return(
    <>
      <h1> Aplicación de estudiantes </h1>
      <Link to="/estudiantes"> Lista de estudiantes </Link> - 
      <Link to="/formulario/estudiante"> Agregar estudiante </Link>
      <Routes>
        <Route path="/formulario/estudiante" element={<FormularioEstudiante 
                      actualizarListaEstudiantes={actualizarListaEstudiantes}/>}/>
        <Route path="/estudiantes" element={<ListaEstudiantes 
                      listaEstudiantes={listaEstudiantes}/>} />
        <Route path="/detalle/estudiante/:_id" element={<Estudiante 
                      listaEstudiantes={listaEstudiantes}
                      eliminarEstudianteDeLaLista={eliminarEstudianteDeLaLista}/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;