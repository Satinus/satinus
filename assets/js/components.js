// Carga componentes dinámicamente
const loadComponent = async (component, target) => {
    try {
        const response = await fetch(`/includes/${component}.html`);
        const html = await response.text();
        document.querySelector(target).insertAdjacentHTML('afterbegin', html);
    } catch (error) {
        console.error(`Error cargando ${component}:`, error);
    }
};

// Carga header y footer
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header', 'body');
    loadComponent('footer', 'body');
});