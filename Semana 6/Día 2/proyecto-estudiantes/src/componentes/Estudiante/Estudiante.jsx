import { Component } from "react";
/*
const Estudiante = (props) => {
    console.log(props);
    return(
        <>
            <h3> Nombre: {props.nombre} {props.apellido} </h3>
            <p> Edad: {props.edad} </p>
            <p> Curso: {props.curso} </p>
        </>
    );
}
*/

class Estudiante extends Component{
    constructor(props){
        super(props);
    }

    render = () => {
        return(
            <>
                <h3> Nombre: {this.props.nombre} {this.props.apellido} </h3>
                <p> Edad: {this.props.edad} </p>
                <p> Curso: {this.props.curso} </p>
                <button onClick={this.incrementarContador}> Aumentar contador </button>
             </>
        );
    }
}

export default Estudiante;