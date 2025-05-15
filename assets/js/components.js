// assets/js/components.js
document.addEventListener('DOMContentLoaded', () => {
    // Cargar header AL INICIO del body
    fetch('/includes/header.html')
        .then(res => res.text())
        .then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);
            initMenu(); // Si tienes funciones del menú
        });
    
    // Cargar footer AL FINAL del body
    fetch('/includes/footer.html')
        .then(res => res.text())
        .then(html => {
            document.body.insertAdjacentHTML('beforeend', html);
        });
});