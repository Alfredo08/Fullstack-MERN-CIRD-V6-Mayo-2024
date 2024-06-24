import { useState } from "react";

const FormularioEstudiante = (props) => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState(0);
    const [curso, setCurso] = useState("");

    const enviarFormularioEstudiante = (e) => {
        e.preventDefault();
        const nuevoEstudiante = {
            nombre, apellido, edad, curso
        }
        props.actualizarListaEstudiantes(nuevoEstudiante);
        setNombre("");
        setApellido("");
        setEdad(0);
        setCurso("");
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
                    <label htmlFor="edad">
                        Edad:
                    </label>
                    <input type="number"
                           id="edad"
                           name="edad"
                           value={edad}
                           onChange={(e) => setEdad(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="curso">
                        Curso:
                    </label>
                    <input type="text"
                           id="curso"
                           name="curso"
                           value={curso}
                           onChange={(e) => setCurso(e.target.value)} />
                </div>
                <button> Agregar </button>
            </form>
        </>
    );
}

export default FormularioEstudiante;