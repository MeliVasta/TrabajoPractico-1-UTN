// sector variables

// imagen principal main
let imagenMain = document.getElementById("mainImagen");

// boton saber mas portofolio
let seccionPortafolioGrupo = document.querySelectorAll(".seccion-portafolio-grupo");

// mensaje de enviado con exito formformulario
let formulario = document.getElementById("formulario");


// slider que hago
let contenedorCajas = document.querySelector(".contenedor-cajas");
let cards = document.querySelector(".seccion-que-hago-cajas");
let siguiente = document.getElementById("derecha");
let atras = document.getElementById("izquierda");



// funcion efecto cambio de imagen main

let cambioImagen = () => {
    let mouseOver = () => {
        imagenMain.src = "img/retratoCambio.png";
    };

    let mouseOut = () => {
        imagenMain.src = "img/retrato.png";
    };

    let clickImage = () => {
        imagenMain.src = "img/retratoCambio.png";
    };

    imagenMain.addEventListener("mouseover", mouseOver);
    imagenMain.addEventListener("mouseout", mouseOut);
    imagenMain.addEventListener("click", clickImage);
};

cambioImagen();


// saber mas seccion portfolio

seccionPortafolioGrupo.forEach((contenido) => {
    let btnSaberMas = contenido.querySelector(".btnSaberMas");
    let cajaPortafolio = contenido.querySelector(".cajasPortafolio");
    let cajaSaberMas = contenido.querySelector(".saberMas");
    let btnCross = contenido.querySelector(".btnCross");

    btnSaberMas.addEventListener("click", () => {
        if (cajaPortafolio.classList.contains("visible")) {
            cajaPortafolio.classList.remove("visible");
            cajaPortafolio.classList.add("ocultar");
        }
        if (cajaSaberMas.classList.contains("ocultar")) {
            cajaSaberMas.classList.add("saber-mas-cajas");
        }
    });

    btnCross.addEventListener("click", () => {
        if (cajaSaberMas.classList.contains("saber-mas-cajas")) {
            cajaSaberMas.classList.remove("saber-mas-cajas");
            cajaSaberMas.classList.add("ocultar");
        }
        if (cajaPortafolio.classList.contains("ocultar")) {
            cajaPortafolio.classList.remove("ocultar");
            cajaPortafolio.classList.add("visible");
        }
    });
});


//Mensaje de "Enviado con éxito" en el formulario:

// revisar el submit y porque no se borra el mensaje una vez que completo todos los datos

formulario.addEventListener("submit", (evento) => {
    // no se borran los datos ni renueva la pagina cuando le da submit
    evento.preventDefault();

    // requerir todos los campos para enviar
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let asunto = document.getElementById("asunto").value;
    let textarea = document.getElementById("textarea").value;

    if (!nombre || !telefono || !email || !asunto || !textarea) {

        let mensajeError = document.createElement('p');
        mensajeError.textContent = 'Faltan completar campos requeridos';
        mensajeError.setAttribute('class', 'mensaje-error');

        formulario.appendChild(mensajeError);
    } else {

        //elimina mensaje de error cuando los datos requeridos son llenados correctamente
        let mensajesError = document.querySelectorAll('.mensaje-error');
        mensajesError.forEach(mensaje => mensaje.remove());

        // crear mensaje de enviado con exito
        let mensajeExito = document.createElement("p");
        mensajeExito.textContent = "¡Enviado con éxito!";
        mensajeExito.setAttribute("class", "mensaje-exito");

        // aparece debajo del boton enviar
        formulario.appendChild(mensajeExito);

        // limpiar campos del formulario
        document.getElementById("nombre").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("email").value = "";
        document.getElementById("asunto").value = "";
        document.getElementById("textarea").value = "";
    }
});



//Slider para las cards en la sección "What I Do":

let index = 0;
let cantidadCartas = 3;


let slider = () => {

    // boton para adelante
    siguiente.addEventListener("click", () => {
        if (index < contenedorCajas.children.length - cantidadCartas) {
            index += cantidadCartas;
            desplazamientos();
        }
    });


    // boton para atras
    atras.addEventListener("click", () => {
        if (index >= cantidadCartas) {
            index -= cantidadCartas;
            desplazamientos();
        }
    });

    let desplazamientos = () => {

        let desplazamiento = -index * 340 + "px";

        // media querie 992px
        let widthQuery = window.matchMedia("(max-width: 992px)");

        if (widthQuery.matches) {
            desplazamiento = -index * 200 + "px";
        }

        // media querie 576px
        let widthQuerys = window.matchMedia("(max-width: 576px)");

        if (widthQuerys.matches) {
            cantidadCartas = 1;
            desplazamiento = -index * 300 + "px";
        }
        contenedorCajas.style.transform = `translateX(${desplazamiento})`;
    }
};

slider();