import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormularioLogin = (props) => {
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navegacion = useNavigate();

    const procesaLogin = async (event) => {
        event.preventDefault();
        const URL = "http://localhost:8080/estudiante/login";
        const config = {
            correo, password
        }
        try{
            const respuesta = await axios.post(URL, config);
            localStorage.setItem("token", respuesta.data.token);
            props.setLoginValido(true);
            setError("");
            setCorreo("");
            setPassword("");
            navegacion("/estudiantes");
        }
        catch(err){
            setError(err.response.data.mensaje);
        }
    }

    return(
        <>
            <h2> Login </h2>
            <form onSubmit={procesaLogin}>
                <div>
                    <label htmlFor="correo">
                        Correo:
                    </label>
                    <input type="text"
                           name="correo"
                           id="correo"
                           value={correo}
                           onChange={(e) => setCorreo(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">
                        Contraseña:
                    </label>
                    <input type="password"
                           name="password"
                           id="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    {error}
                </div>
                <button>
                    Login
                </button>
            </form>
        </>
    );
}

export default FormularioLogin;