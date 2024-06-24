
const Estudiante = (props) => {

    const eliminarEstudiante = () => {
        props.eliminarEstudianteDeLaLista(props.nombre, props.apellido);
    }

    return(
        <>
            <h3> Nombre: {props.nombre} {props.apellido} </h3>
            <p> Edad: {props.edad} </p>
            <p> Curso: {props.curso} </p>
            <button onClick={eliminarEstudiante}> Eliminar </button>
        </>
    );
}

export default Estudiante;