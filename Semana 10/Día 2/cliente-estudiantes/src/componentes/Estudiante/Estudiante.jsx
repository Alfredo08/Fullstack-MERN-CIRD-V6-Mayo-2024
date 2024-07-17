import { useNavigate, useParams } from "react-router-dom";

const Estudiante = (props) => {
    const parametros = useParams();
    const navegacion = useNavigate();
    
    const estudianteActual = props.listaEstudiantes.find((estudiante) => estudiante._id == parametros._id);

    const eliminarEstudiante = () => {
        props.eliminarEstudianteDeLaLista(estudianteActual._id);
        navegacion("/estudiantes");
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
        </>
    );
}

export default Estudiante;