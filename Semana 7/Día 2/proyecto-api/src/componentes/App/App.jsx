import { useEffect, useState } from 'react';
import './App.css';
import FormularioPerritos from '../FormularioPerritos/FormularioPerritos';

const App = () => {

  const [imagenesPerritos, setImagenesPerritos] = useState([]);
  const [imagenesGatitos, setImagenesGatitos] = useState([]);
  const [numImagenes, setNumImagenes] = useState(5);

  useEffect(() => {
    const obtenerImagenes = async () => {
      const URL = `https://dog.ceo/api/breeds/image/random/${numImagenes}`;
      const respuesta = await fetch(URL);
      const datos = await respuesta.json();
      setImagenesPerritos(datos.message);
    }

    obtenerImagenes();
  }, [numImagenes]);

  const cargarImagenesGatitos = async () => {
    const URL ="https://api.thecatapi.com/v1/images/search?limit=10";
    const respuesta = await fetch(URL);
    const datos = await respuesta.json();
    setImagenesGatitos(datos);
  }

  return(
    <>
      <h1> API de perritos </h1>
      <FormularioPerritos numImagenes={numImagenes} 
                          setNumImagenes={setNumImagenes}/>
      {imagenesPerritos.map((imagen, indice) => {
        return (<img className="imagen" 
                     src={imagen} 
                     alt="Imagen de un perrito" 
                     key={indice}/>)
      })}
      <h1> API de gatitos </h1>
      <div>
        <button onClick={cargarImagenesGatitos}> Cargar imágenes de gatitos </button>
      </div>
      {imagenesGatitos.map((imagen) => {
        return (<img className="imagen" 
                     src={imagen.url} 
                     alt="Imagen de un gatito"
                     key={imagen.id}
                     id={imagen.id}/>)
      })}
    </>
  );
}

export default App
