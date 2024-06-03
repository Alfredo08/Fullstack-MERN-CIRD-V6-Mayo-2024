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

function abrirModal(elementoEditarPerfil){
    let modal = document.querySelector('.modal');
    modal.classList.remove('hidden');

    let contenedorPrincipal = document.querySelector('.main');
    contenedorPrincipal.classList.add('opacidad');

    let nombreUsuario = document.querySelector('#userName').innerText;
    let ciudad = document.querySelector('#ciudad').innerText;

    document.querySelector('#editar-nombre').value = nombreUsuario;
    document.querySelector('#editar-ciudad').value = ciudad;
}

function actualizarDatos(event){
    event.preventDefault();

    let nombreNuevo = document.querySelector('#editar-nombre').value;
    let ciudadNueva = document.querySelector('#editar-ciudad').value;

    if(nombreNuevo === "" || ciudadNueva === ""){
        document.querySelector('.error').innerText = "¡Por favor proporciona ambos nombre y ciudad!";
    }
    else{
        document.querySelector('.error').innerText = "";
        document.querySelector('#userName').innerText = nombreNuevo;
        document.querySelector('#ciudad').innerText = ciudadNueva;
    
        let modal = document.querySelector('.modal');
        modal.classList.add('hidden');
    
        let contenedorPrincipal = document.querySelector('.main');
        contenedorPrincipal.classList.remove('opacidad'); 
    }
}