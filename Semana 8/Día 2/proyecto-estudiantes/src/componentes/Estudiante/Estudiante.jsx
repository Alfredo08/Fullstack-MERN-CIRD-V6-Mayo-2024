import { useNavigate, useParams } from "react-router-dom";

const Estudiante = (props) => {
    const parametros = useParams();
    const navegacion = useNavigate();
    
    const estudianteActual = props.listaEstudiantes.find((estudiante) => estudiante.id == parametros.id);

    const eliminarEstudiante = () => {
        props.eliminarEstudianteDeLaLista(estudianteActual.id);
        navegacion("/estudiantes");
    }

    return(
        <>
            <h3> Nombre: {estudianteActual.nombre} {estudianteActual.apellido} </h3>
            <p> Edad: {estudianteActual.edad} </p>
            <p> Curso: {estudianteActual.curso} </p>
            <button onClick={eliminarEstudiante}> Eliminar </button>
        </>
    );
}

export default Estudiante;