import {Component} from 'react';
import Estudiante from '../Estudiante/Estudiante';
import Extra from '../Extra/Extra';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      contador: 1,
      nombre: "Alex Miller",
      estudiantes: [{
        nombre: "Julieta",
        apellido: "Morales",
        edad: 22,
        curso: "MERN"
      },
      {
        nombre: "Alan",
        apellido: "González",
        edad: 25,
        curso: "Python"
      },
      {
        nombre: "Martha",
        apellido: "Gómez",
        edad: 24,
        curso: "Fundamentos de la web"
      },
      {
        nombre: "Alex",
        apellido: "Miller",
        edad: 25,
        curso: "MERN"
      }]
    }
  }

  incrementarContador = () => {
    this.setState({
      contador: this.state.contador + 1
    });
  }

  incrementarNumeroAlContador = (num) => {
    this.setState({
      contador: this.state.contador + num
    });
  }

  render = () => {
    return(
      <>
        <h1> Aplicación de estudiantes </h1>
        <h2> Bienvenido de vuelta {this.state.nombre} </h2>
        <p> El contador va en: {this.state.contador} </p>
        <button onClick={() => this.incrementarContador()}> Aumentar contador </button>
        <button onClick={() => this.incrementarNumeroAlContador(5)}> Incrementar en 5 </button>
        <button onClick={() => this.incrementarNumeroAlContador(10)}> Incrementar en 10 </button>
        
        <Extra autor={"Alfredo Salazar"}>
          <p> Hola, yo soy contenido extra </p>
          <p> Soy una propiedad llamada children </p>
        </Extra>

        <h2> Lista de estudiantes </h2>
        {
          this.state.estudiantes.map((estudiante) => {
            return (<Estudiante nombre={estudiante.nombre}
                                apellido={estudiante.apellido}
                                edad={estudiante.edad}
                                curso={estudiante.curso}
                                incrementarContador={this.incrementarContador}/>)
          })
        }

      </>
    );
  }
}

export default App
