// Agrega este código al final de tu scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Obtén todos los botones de navegación
    var navButtons = document.querySelectorAll('nav a');

    // Itera sobre cada botón de navegación
    navButtons.forEach(function(button) {
        // Agrega un evento de clic a cada botón
        button.addEventListener('click', function(event) {
            // Evita que el enlace predeterminado se active
            event.preventDefault();
            
            // Obtén la URL de la página correspondiente al botón
            var pageUrl = button.getAttribute('href');

            // Redirige a la página correspondiente
            window.location.href = pageUrl;
        });
    });
});
