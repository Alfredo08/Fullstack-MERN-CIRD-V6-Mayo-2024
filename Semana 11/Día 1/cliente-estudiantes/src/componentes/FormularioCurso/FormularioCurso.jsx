import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const FormularioCurso = (props) => {
    const parametros = useParams();
    const navegacion = useNavigate();

    const estudianteActual = props.listaEstudiantes.find((estudiante) => estudiante.correo == parametros.correo); 
    const cursosAsignados = estudianteActual.cursos.map((curso) => curso.nombre);
    const clavesAsignadas = estudianteActual.cursos.map((curso) => curso.clave);
    const cursosNoAsignados = props.listaCursos.filter((curso) => ! cursosAsignados.includes(curso.nombre));
    const clavesNoAsignadas = props.listaCursos.filter((curso) => ! clavesAsignadas.includes(curso.clave));
    const [clave, setClave] = useState(clavesNoAsignadas[0] ? clavesNoAsignadas[0] .clave : "");
    const agregarCurso = async (event) => {
        event.preventDefault();

        const URL = "http://localhost:8080/estudiante/agregar/curso";
        const curso = {
            correo: parametros.correo,
            clave: clave
        }

        const respuesta = await axios.put(URL, curso);
        props.actualizarCursosEnListaDeEstudiantes(respuesta.data);
        navegacion("/estudiantes");
    }

    return(
        <>
            <h2> Agregar curso a {parametros.correo}</h2>
            <form onSubmit={agregarCurso}>
                <label htmlFor="clave">
                    Seleccionar el curso
                </label>
                <select id="clave" value={clave} onChange={(e) => setClave(e.target.value)} name="clave">
                    {cursosNoAsignados.map((curso, index) => {
                        return(<option value={curso.clave} key={index}> {curso.nombre} </option>)
                    })}
                </select>
                <button>
                    Agregar
                </button>
            </form>
        </>
    );
}

export default FormularioCurso;