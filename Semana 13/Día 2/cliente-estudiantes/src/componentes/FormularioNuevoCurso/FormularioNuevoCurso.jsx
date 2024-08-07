import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormularioNuevoCurso = (props) => {

    const [nombre, setNombre] = useState("");
    const [clave, setClave] = useState("");
    const [mensajeError, setMensajeError] = useState("");
    const navegacion = useNavigate();

    const enviarFormularioCurso = async (event) => {
        event.preventDefault();
        const URL = "http://localhost:8080/curso/nuevo";
        const nuevoCurso = {
            nombre, clave
        };
        const config = {
            "headers": {
                token_usuario: localStorage.getItem("token")
            }
        }
        try{
            const respuesta = await axios.post(URL, nuevoCurso, config);
            props.actualizarListaCursos(respuesta.data);
            setClave("");
            setNombre("");
            setMensajeError("");
            navegacion("/estudiantes");
        }
        catch(error){
            setMensajeError(error.response.statusText);
            props.setLoginValido(false);
            navegacion("/login");
        }

    }

    return(
        <>
            <h2> Agregar un nuevo curso </h2>
            <form onSubmit={enviarFormularioCurso}>
                <div>
                    <label htmlFor="nombre">
                        Nombre:
                    </label>
                    <input type="text"
                           id="nombre"
                           name="nombre"
                           value={nombre}
                           onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="clave">
                        Clave:
                    </label>
                    <input type="text"
                           id="clave"
                           name="clave"
                           value={clave}
                           onChange={(e) => setClave(e.target.value)} />
                </div>
                <button>
                    Agregar
                </button>
            </form>
            <div> {mensajeError} </div>
        </>
    );
}

export default FormularioNuevoCurso;