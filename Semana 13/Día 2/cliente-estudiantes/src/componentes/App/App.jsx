import { useState } from "react";
import ListaEstudiantes from "../ListaEstudiantes/ListaEstudiantes";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Estudiante from "../Estudiante/Estudiante";
import Error from "../Error/Error";
import FormularioEstudiante from './../FormularioEstudiante/FormularioEstudiante';
import FormularioCurso from "../FormularioCurso/FormularioCurso";
import { useEffect } from "react";
import axios from "axios";
import FormularioNuevoCurso from "../FormularioNuevoCurso/FormularioNuevoCurso";
import ListaCursos from "../ListaCursos/ListaCursos";
import FormularioLogin from "./../FormularioLogin/FormularioLogin";

const App = () => {
  const [listaEstudiantes, setListaEstudiantes] = useState([]);
  const [listaCursos, setListaCursos] = useState([]);
  const [loginValido, setLoginValido] = useState(false);
  const navegacion = useNavigate();

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
      const config = {
        "headers": {
          token_usuario: localStorage.getItem("token")
        }
      }
      try{
        const respuesta = await axios.get(URL, config);
        setListaEstudiantes(respuesta.data);
      }
      catch(err){
        navegacion("/login");
      }
    }

    const obtenerListaDeCursos = async () => {
      const URL = "http://localhost:8080/curso";
      const config = {
        "headers": {
          token_usuario: localStorage.getItem("token")
        }
      }
      try{
        const respuesta = await axios.get(URL, config);
        setListaCursos(respuesta.data);
      }
      catch(err){
        navegacion("/login");
      }
    }

    obtenerListaDeEstudiantes();
    obtenerListaDeCursos();
  }, [loginValido]);

  const procesaLogout = () => {
    localStorage.removeItem("token");
    setLoginValido(false);
    navegacion("/login");
  }

  return(
    <>
      <h1> Aplicación de estudiantes </h1>
      {
      (loginValido) ? (<>
        <Link to="/estudiantes"> Lista de estudiantes </Link> - 
        <Link to="/formulario/estudiante"> Agregar estudiante </Link> -
        <Link to="/cursos"> Lista de cursos </Link> - 
        <Link to="/formulario/nuevo/curso"> Agregar curso </Link>
        <button onClick={procesaLogout}>
          Logout
        </button>
        </>) : ""
      }
      <Routes>
        <Route path="/login" element={<FormularioLogin 
                      setLoginValido={setLoginValido}/>}/>
        <Route path="/formulario/estudiante" element={<FormularioEstudiante 
                      actualizarListaEstudiantes={actualizarListaEstudiantes}
                      setLoginValido={setLoginValido}/>}/>
        <Route path="/estudiantes" element={<ListaEstudiantes 
                      listaEstudiantes={listaEstudiantes}/>} />
        <Route path="/detalle/estudiante/:_id" element={<Estudiante 
                      listaEstudiantes={listaEstudiantes}
                      eliminarEstudianteDeLaLista={eliminarEstudianteDeLaLista}
                      setLoginValido={setLoginValido}/>} />
        <Route path="/formulario/curso/:correo" element={<FormularioCurso listaCursos={listaCursos}
                      actualizarCursosEnListaDeEstudiantes={actualizarCursosEnListaDeEstudiantes}
                      listaEstudiantes={listaEstudiantes}
                      setLoginValido={setLoginValido}/>}/>
        <Route path="/formulario/nuevo/curso" element={<FormularioNuevoCurso 
                      actualizarListaCursos={actualizarListaCursos}
                      setLoginValido={setLoginValido}/>} />
        <Route path="/cursos" element={<ListaCursos listaCursos={listaCursos}/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;