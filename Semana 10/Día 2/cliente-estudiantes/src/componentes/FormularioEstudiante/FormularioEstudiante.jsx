import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FormularioEstudiante = (props) => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState(0);
    const [correo, setCorreo] = useState("");
    const [error, setError] = useState("");

    const navegacion = useNavigate();

    const enviarFormularioEstudiante = async (e) => {
        e.preventDefault();
        try{
            const nuevoEstudiante = {
                nombre, apellido, edad, correo
            }
            const URL = "http://localhost:8080/estudiante/nuevo";
            const respuesta = await axios.post(URL, nuevoEstudiante);
           
            props.actualizarListaEstudiantes(respuesta.data);
            setNombre("");
            setApellido("");
            setEdad(0);
            setError("");
            navegacion("/estudiantes");
        }
        catch(error){
            console.log("Algo falló", error);
            setError(error.response.statusText);
        }
    }

    return(
        <>
            <h2> Agregar nuevo estudiante </h2>
            <form onSubmit={enviarFormularioEstudiante}>
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
                    <label htmlFor="apellido">
                        Apellido:
                    </label>
                    <input type="text"
                           id="apellido"
                           name="apellido"
                           value={apellido}
                           onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="correo">
                        Correo:
                    </label>
                    <input type="text"
                           id="correo"
                           name="correo"
                           value={correo}
                           onChange={(e) => setCorreo(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="edad">
                        Edad:
                    </label>
                    <input type="number"
                           id="edad"
                           name="edad"
                           value={edad}
                           onChange={(e) => setEdad(e.target.value)} />
                </div>
                <button> Agregar </button>
                <div>{error}</div>
            </form>
        </>
    );
}

export default FormularioEstudiante;