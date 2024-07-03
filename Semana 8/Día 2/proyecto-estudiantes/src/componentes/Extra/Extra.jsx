
const Extra = (props) => {
    return(
        <>
            <h2> Aquí cargamos el contenido extra llamdo 'children' </h2>
            <h3> Autor: {props.autor} </h3>
            {props.children}
        </>
    );
}

export default Extra;