// Carga componentes
document.addEventListener('DOMContentLoaded', () => {
    // Header
    fetch('./includes/header.html')
        .then(res => res.text())
        .then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);
        });
    
    // Footer
    fetch('./includes/footer.html')
        .then(res => res.text())
        .then(html => {
            document.body.insertAdjacentHTML('beforeend', html);
        });
});