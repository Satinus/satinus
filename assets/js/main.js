// load-components.js (versión mejorada)
const loadComponent = async (path, targetSelector, position = 'beforeend') => {
    try {
        const response = await fetch(path);
        if (!response.ok) throw new Error(`Error ${response.status}`);
        const html = await response.text();
        document.querySelector(targetSelector).insertAdjacentHTML(position, html);
        console.log(`Componente ${path} cargado`);
    } catch (error) {
        console.error(`Error cargando ${path}:`, error);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    loadComponent('../includes/header.html', 'body', 'afterbegin');
    loadComponent('../includes/footer.html', 'body', 'beforeend');
});