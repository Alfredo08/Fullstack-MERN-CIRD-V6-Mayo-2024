
const ListaCursos = (props) => {
    return(
        <>
            <h2> Lista de curso </h2>
            {props.listaCursos.map((curso, index) => {
                return(
                    <div>
                        {curso.clave} - {curso.nombre} 
                    </div>
                )
            })}
        </>
    );  
}

export default ListaCursos;