document.addEventListener("DOMContentLoaded", function () {

    const btnUser = document.getElementById("btnUser");
    const loginBox = document.getElementById("loginBox");

    btnUser.addEventListener("click", function () {
        loginBox.classList.toggle("activo");
    });

});

    btnUser.addEventListener("click", function () {
        loginBox.classList.toggle("activo");
    });

    function buscarJuego() {

    let filtro = document.getElementById("searchInput").value.toLowerCase();
    let tarjetas = document.querySelectorAll(".game-card");

    tarjetas.forEach(function (card) {

        let titulo = card.querySelector("h3").textContent.toLowerCase();

        if (titulo.includes(filtro)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}

let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);

document.addEventListener("DOMContentLoaded", function () {

    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);

    let pregunta = document.getElementById("preguntaCaptcha");

    if (pregunta) {
        pregunta.innerText = "¿Cuánto es " + num1 + " + " + num2 + "?";
    }

});

    /* Funciones Sincronas */
function validarFormulario() {

    let usuario = document.querySelector('input[name="usuario"]').value;
    let password = document.querySelector('input[name="password"]').value;
    let captcha = document.getElementById("captcha").value;


    if (usuario.length < 4) {
        alert("El usuario debe tener mínimo 4 caracteres");
        return false;
    }

    if (password.length < 6) {
        alert("La contraseña debe tener mínimo 6 caracteres");
        return false;
    }

    let regexPassword = /^(?=.*[A-Z])(?=.*[0-9]).+$/;

    if (!regexPassword.test(password)) {
        alert("La contraseña debe tener al menos una mayúscula y un número");
        return false;
    }

    if (parseInt(captcha) !== (num1 + num2)) {
        alert("Verificación humana incorrecta");
        return false;
    }

    if (usuario !== "Luis" || password !== "Luis2060") {
        alert("Usuario o contraseña incorrecta");
        return false;
    }

    alert("Inicio de sesión exitoso");
    return false; 
}

let posicion = 0;

function moverCarrusel(direccion) {

    const carrusel = document.getElementById("carrusel");
    const tarjetas = document.querySelectorAll(".carrusel .game-card");

    const anchoTarjeta = tarjetas[0].offsetWidth + 20; 
    const maxScroll = (tarjetas.length - 3) * anchoTarjeta;

    posicion += direccion * anchoTarjeta;

    if (posicion < 0) posicion = 0;
    if (posicion > maxScroll) posicion = maxScroll;

    carrusel.style.transform = `translateX(-${posicion}px)`;
}


document.addEventListener("DOMContentLoaded", function () {

    const btnArriba = document.getElementById("btnArriba");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            btnArriba.style.display = "block";
        } else {
            btnArriba.style.display = "none";
        }
    });

    btnArriba.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});


function mostrarRecuperar() {
    document.getElementById("formLogin").style.display = "none";
    document.getElementById("formRecuperar").style.display = "block";
}


function volverLogin() {
    document.getElementById("formRecuperar").style.display = "none";
    document.getElementById("formLogin").style.display = "block";
}


function recuperarPassword() {

    let correo = document.getElementById("correoRecuperacion").value;

    if (!correo.includes("@")) {
        alert("Ingresa un correo válido");
        return;
    }

    alert("Se ha enviado un enlace de recuperación a: " + correo);
}

document.addEventListener("DOMContentLoaded", function () {

    const btnUser = document.getElementById("btnUser");
    const loginBox = document.getElementById("loginBox");

    if (btnUser && loginBox) {
        btnUser.addEventListener("click", function () {
            loginBox.classList.toggle("activo");
        });
    }

});