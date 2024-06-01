document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('nav.barra-navegacion button');

    navButtons.forEach((button, index) => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            localStorage.setItem('activeNavIndex', index);  // Guarda el índice del botón activo

            let pageUrl = button.querySelector('a').getAttribute('page');
            window.location.href = pageUrl;  // Redirige a la página
        });
    });

    // Restaura el estado activo al cargar la página
    const activeIndex = localStorage.getItem('activeNavIndex');
    if (activeIndex !== null) {
        navButtons[activeIndex].classList.add('active');
    }

    window.addEventListener('scroll', function() {
        const textContent = document.querySelector('.texto_main');
        const imageContent = document.querySelector('.imagen_main');
        const triggerHeight = window.innerHeight / 4; // Ajusta esto según necesites

        if (window.scrollY > triggerHeight) {
            textContent.classList.add('fade-in');
            imageContent.classList.add('fade-in');
        }
    });
});