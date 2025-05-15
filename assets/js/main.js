// Toggle del menú móvil
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.header__menu-toggle');
    const headerNav = document.querySelector('.header__nav');
    
    menuToggle?.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        headerNav.classList.toggle('active');
        
        // Cambiar ícono ☰ → ✕
        const icon = menuToggle.querySelector('.menu-icon');
        icon.textContent = isExpanded ? '☰' : '✕';
    });
    
    // Cerrar menú al hacer clic en enlace (móvil)
    document.querySelectorAll('.header__nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                headerNav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.querySelector('.menu-icon').textContent = '☰';
            }
        });
    });
});