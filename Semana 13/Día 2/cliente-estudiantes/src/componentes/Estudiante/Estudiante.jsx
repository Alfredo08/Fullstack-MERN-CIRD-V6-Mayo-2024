import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const Estudiante = (props) => {
    const parametros = useParams();
    const navegacion = useNavigate();
    
    const estudianteActual = props.listaEstudiantes.find((estudiante) => estudiante._id == parametros._id);

    const eliminarEstudiante = async () => {
        const URL = `http://localhost:8080/estudiante/eliminar/${estudianteActual.correo}`;
        const config = {
            "headers": {
                token_usuario: localStorage.getItem("token")
            }
        }
        try{
            await axios.delete(URL, config);
            props.eliminarEstudianteDeLaLista(estudianteActual._id);
            navegacion("/estudiantes");
        }
        catch(err){
            props.setLoginValido(false);
            navegacion("/login");
        }
    }

    const redireccionarACursos = () => {
        navegacion(`/formulario/curso/${estudianteActual.correo}`);
    }

    return(
        <>
            <h3> Nombre: {estudianteActual.nombre} {estudianteActual.apellido} </h3>
            <h3> Correo: {estudianteActual.correo} </h3>
            <p> Edad: {estudianteActual.edad} </p>
            <p> Cursos: </p>
            <ul>
                {estudianteActual.cursos.map((curso, index) => {
                    return(<li key={index}> {curso.clave} - {curso.nombre} </li>)
                })}
            </ul>
            <button onClick={eliminarEstudiante}> Eliminar </button>
            <button onClick={redireccionarACursos}> Agregar curso </button>
        </>
    );
}

export default Estudiante;