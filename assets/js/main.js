// Función para el menú activo
document.addEventListener('DOMContentLoaded', function() {
    // Resalta el enlace de la página actual
    const currentPage = location.pathname.split('/').pop();
    document.querySelectorAll('.main-nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});