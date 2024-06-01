document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('nav.barra-navegacion button');

    // Función para activar el botón basado en la URL actual
    function activateButtonBasedOnUrl() {
        const currentPage = window.location.pathname.split('/').pop(); // Obtiene el nombre del archivo actual de la URL

        navButtons.forEach((button, index) => {
            const pageUrl = button.querySelector('a').getAttribute('page');
            if (pageUrl === currentPage) {
                button.classList.add('active');
                sessionStorage.setItem('activeNavIndex', index); // Guarda el índice del botón activo
            } else {
                button.classList.remove('active');
            }
        });
    }

    console.log("Samantha está re buena 😻")
    console.log("¿Por qué eres tan pro Aristi?")
    console.log("Espero que los del IB no lean esto...")

    // Activa el botón cuando se hace clic
    navButtons.forEach((button, index) => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = button.querySelector('a').getAttribute('page'); // Redirige a la página
        });
    });

    // Activa el botón basado en la URL al cargar la página
    activateButtonBasedOnUrl();
});
