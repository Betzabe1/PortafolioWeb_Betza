// animaciones
window.sr = ScrollReveal();

sr.reveal('.b-nav', {
    duration: 2000,
    origin: 'bottom',
    distance: '-100px'
});

sr.reveal('.perfil', {
    duration:2000,
    rotate: {
        x: 30,
        y: 30,
    }
});
sr.reveal('.Sm', {
    duration: 2000,
    origin: 'left',
    distance: '400px'
});
sr.reveal('.sobMiText', {
    duration: 2000,
    origin: 'left',
    distance: '200px'
});
sr.reveal('.card', {
    duration: 400,
    origin: 'right',
    distance: '300px'
});
sr.reveal('.sk', {
    duration: 3000,
    origin: 'bottom',
    distance: '200px'
});


sr.reveal('.cont', {
    duration: 2000,
    origin: 'left',
    distance: '200px'
});


const scrollreveal = require("scrollreveal");

document.addEventListener("DOMContentLoaded", function() {
    // Selecciona la hamburguesa
    var hamburger = document.querySelector(".hamburger");
    // Asigna la función de clic
    hamburger.onclick = function() {
        // Selecciona el nav-bar
        var navBar = document.querySelector(".nav-bar");
        // Alterna la clase 'active' para cambiar el fondo
        navBar.classList.toggle("active");
    };
});
function limpiarPlaceholder(){
    var textarea=document.getElementById('textarea');
    if(textarea.ariaValueMax.trim()==""){
        textarea.value="";
    }
}
