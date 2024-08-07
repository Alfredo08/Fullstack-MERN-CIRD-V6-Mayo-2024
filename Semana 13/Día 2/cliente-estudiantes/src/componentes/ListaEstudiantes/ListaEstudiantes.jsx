import { Link } from "react-router-dom";

const ListaEstudiantes = (props) => {
    return(
        <>
            <h2> Lista de estudiantes </h2>
            {props.listaEstudiantes.map((estudiante, indice) => {
                return(
                    <div key={indice}>
                        <Link to={`/detalle/estudiante/${estudiante._id}`}> {estudiante.nombre} {estudiante.apellido} </Link>
                    </div>);
            })}
        </>
    );
}

export default ListaEstudiantes;