import { useState } from "react";
import ListaEstudiantes from "../ListaEstudiantes/ListaEstudiantes";
import { Route, Routes, Link } from "react-router-dom";
import Estudiante from "../Estudiante/Estudiante";
import Error from "../Error/Error";
import FormularioEstudiante from './../FormularioEstudiante/FormularioEstudiante';
import FormularioCurso from "../FormularioCurso/FormularioCurso";
import { useEffect } from "react";
import axios from "axios";
import FormularioNuevoCurso from "../FormularioNuevoCurso/FormularioNuevoCurso";
import ListaCursos from "../ListaCursos/ListaCursos";

const App = () => {
  const [listaEstudiantes, setListaEstudiantes] = useState([]);
  const [listaCursos, setListaCursos] = useState([]);

  const actualizarListaEstudiantes = (nuevoEstudiante) => {
    setListaEstudiantes([...listaEstudiantes, nuevoEstudiante]);
  }

  const actualizarListaCursos = (nuevoCurso) => {
    setListaCursos([...listaCursos, nuevoCurso]);
  }

  const eliminarEstudianteDeLaLista = (_id) => {
    const listaTemporal = [...listaEstudiantes];
    for(let i = 0; i < listaTemporal.length; i ++){
      if(listaTemporal[i]._id == _id){
        listaTemporal.splice(i, 1);
      }
    }
    setListaEstudiantes(listaTemporal);
  }

  const actualizarCursosEnListaDeEstudiantes = (estudianteActual) => {
    const listaTemporal = [...listaEstudiantes];
    for(let i = 0; i < listaTemporal.length; i ++){
      if(listaTemporal[i]._id == estudianteActual._id){
        listaTemporal[i] = estudianteActual;
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

    const obtenerListaDeCursos = async () => {
      const URL = "http://localhost:8080/curso";
      const respuesta = await axios.get(URL);
      setListaCursos(respuesta.data);
    }

    obtenerListaDeEstudiantes();
    obtenerListaDeCursos();
  }, []);

  return(
    <>
      <h1> Aplicación de estudiantes </h1>
      <Link to="/estudiantes"> Lista de estudiantes </Link> - 
      <Link to="/formulario/estudiante"> Agregar estudiante </Link> -
      <Link to="/cursos"> Lista de cursos </Link> - 
      <Link to="/formulario/nuevo/curso"> Agregar curso </Link>
      <Routes>
        <Route path="/formulario/estudiante" element={<FormularioEstudiante 
                      actualizarListaEstudiantes={actualizarListaEstudiantes}/>}/>
        <Route path="/estudiantes" element={<ListaEstudiantes 
                      listaEstudiantes={listaEstudiantes}/>} />
        <Route path="/detalle/estudiante/:_id" element={<Estudiante 
                      listaEstudiantes={listaEstudiantes}
                      eliminarEstudianteDeLaLista={eliminarEstudianteDeLaLista}/>} />
        <Route path="/formulario/curso/:correo" element={<FormularioCurso listaCursos={listaCursos}
                      actualizarCursosEnListaDeEstudiantes={actualizarCursosEnListaDeEstudiantes}
                      listaEstudiantes={listaEstudiantes}/>}/>
        <Route path="/formulario/nuevo/curso" element={<FormularioNuevoCurso 
                      actualizarListaCursos={actualizarListaCursos}/>} />
        <Route path="/cursos" element={<ListaCursos listaCursos={listaCursos}/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;