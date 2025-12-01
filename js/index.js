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
    duration: 4000,
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




// Validar formulario
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("btnEnviar");
    const form = document.getElementById("contactForm");
    const destinatario = document.getElementById("destinatario");
    const correo = document.getElementById("correo");
    const mensaje = document.getElementById("mensaje");

    btn.addEventListener("click", function() {
        destinatario.value = "miriambetzrobrey@gmail.com";

        const emailVal = correo.value.trim();
        const mensajeVal = mensaje.value.trim();

        if (!emailVal || !mensajeVal) {
            Swal.fire({
                icon: "error",
                title: "Campos vacíos",
                text: "Por favor llena todos los campos.",
                confirmButtonColor: "#7b1fa2"
            });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailVal)) {
            Swal.fire({
                icon: "error",
                title: "Correo inválido",
                text: "Por favor ingresa un correo electrónico válido.",
                confirmButtonColor: "#7b1fa2"
            });
            return;
        }

        Swal.fire({
            icon: "success",
            title: "Mensaje enviado",
            text: "Tu mensaje fue enviado correctamente.",
            confirmButtonColor: "#7b1fa2"
        }).then(() => form.submit());
    });
});
