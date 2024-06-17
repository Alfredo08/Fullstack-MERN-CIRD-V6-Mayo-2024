import './App.css';
import Estudiante from '../Estudiante/Estudiante';

function App() {
  let titulo = "Mi primera app de React";
  let mensaje = "";
  
  const validacion = () => {
    if(5 < 10){
      mensaje = "Es verdad a través de la función.";
    }
    else{
      mensaje = "No es verdad";
    }
    return mensaje;
  }

  return (
      <div className="App">
        <h1> {titulo} </h1>
        {
          (5 < 10) ? "Es verdad" : "No es verdad"
        }
        <header className="App-header">
          <Estudiante />
          <Estudiante />
          <Estudiante />
          {validacion()}
        </header>
      </div>

  );
}

export default App;
