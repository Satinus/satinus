// Corrige el JS del menú móvil
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.header__menu-toggle');
    const headerNav = document.querySelector('.header__nav');

    if (menuToggle && headerNav) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            
            // Alternar estados
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            headerNav.classList.toggle('active');
            
            // Animación del ícono
            const icon = menuToggle.querySelector('.menu-icon');
            icon.textContent = isExpanded ? '☰' : '✕';
            
            // Bloquear scroll cuando el menú está abierto
            document.body.style.overflow = isExpanded ? 'auto' : 'hidden';
        });

        // Cerrar menú al hacer clic en enlaces
        document.querySelectorAll('.header__nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    headerNav.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    menuToggle.querySelector('.menu-icon').textContent = '☰';
                    document.body.style.overflow = 'auto';
                }
            });
        });
    }
});