
async function obtenerImagenes(event){
    event.preventDefault();
    let numImagenes = document.querySelector('#num-imagenes').value;
    let URL = `https://dog.ceo/api/breeds/image/random/${numImagenes}`;
    let config = {
        method: 'GET'
    };

    let respuesta = await fetch(URL, config);
    let datos = await respuesta.json();
    
    let resultados = document.querySelector('.resultados');
    resultados.innerHTML = "";
    for(let i = 0; i < datos.message.length; i ++){
        resultados.innerHTML += `<img class="imagen-perrito" src="${datos.message[i]}" alt="Un perrito">`;
    }
}