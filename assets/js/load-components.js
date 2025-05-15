// Carga dinámica de componentes
document.addEventListener('DOMContentLoaded', () => {
    // Carga header
    fetch('../includes/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('afterbegin', data);
            initMenu(); // Si necesitas ejecutar funciones del menú
        });

    // Carga footer
    fetch('../includes/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('beforeend', data);
        });
});