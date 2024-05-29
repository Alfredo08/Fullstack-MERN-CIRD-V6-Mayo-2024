console.log("Enlazado debidamente.");

function mostrarAlerta(){
    alert("Cerrando sesión.");
}

function cerrarSesion(elementoBotonCerrar){
    console.log(elementoBotonCerrar);
    setTimeout(mostrarAlerta, 1000);
}

function eliminarConexion(elementoImagenX){
    // Remover el elemento en la página
    let contenedor = elementoImagenX.closest('.card-list-item');
    contenedor.remove();

    // Actualizar el contador de conexiones
    let contador = document.querySelector('#connectionRequestNumber');
    let numero = Number(contador.innerText);
    numero --;
    contador.innerText = numero;
}

function cambiarFondo(elementoEncabezado){
    elementoEncabezado.classList.add('nuevoFondo');
}

function removerFondo(elementoEncabezado){
    elementoEncabezado.classList.remove('nuevoFondo');
}

function mostrarPais(elementoSelectorPais){
    console.log(elementoSelectorPais.value);
    alert("Seleccionaste " + elementoSelectorPais.value);
}

function cambiarImagen(elementoImagenPerfil){
    elementoImagenPerfil.src = "images/todd-s.jpg";
}

function cambiarImagenDos(elementoAnchor){
    let elementoImagenPerfil = document.querySelector('#imagen-perfil');
    elementoImagenPerfil.src = "images/todd-s.jpg";
}