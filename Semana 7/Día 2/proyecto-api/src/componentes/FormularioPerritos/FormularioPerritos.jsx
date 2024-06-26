
const FormularioPerritos = (props) => {
    return(
        <>
            <h1> Formulario Perritos </h1>
                <div>
                    <label htmlFor="numImagenes">
                        ¿Cuántas imágenes quieres?
                    </label>
                    <input type="number" 
                           id="numImagenes"
                           value={props.numImagenes}
                           onChange={(e) => props.setNumImagenes(e.target.value)}/>
                </div>

        </>
    );
} 

export default FormularioPerritos;