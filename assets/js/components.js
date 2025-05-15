// Carga componentes con rutas absolutas
document.addEventListener('DOMContentLoaded', () => {
    const basePath = window.location.pathname.includes('/pages/') ? '../' : './';
    
    // Header
    fetch(`${basePath}includes/header.html`)
        .then(res => res.text())
        .then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);
            initMenu(); // Llama a la función del menú si existe
        });
    
    // Footer
    fetch(`${basePath}includes/footer.html`)
        .then(res => res.text())
        .then(html => {
            document.body.insertAdjacentHTML('beforeend', html);
        });
});