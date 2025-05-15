// assets/js/load-components.js
const loadComponent = async (path, targetSelector, position = 'beforeend') => {
    try {
        const response = await fetch(path);
        if (!response.ok) throw new Error(`Error ${response.status}`);
        const html = await response.text();
        
        // Crea un contenedor temporal para procesar el HTML
        const temp = document.createElement('div');
        temp.innerHTML = html;
        
        // Corrige rutas relativas en el contenido cargado
        temp.querySelectorAll('img[src^="assets/"], a[href^="assets/"]').forEach(el => {
            if (el.src) el.src = '/' + el.src;
            if (el.href) el.href = '/' + el.href;
        });
        
        document.querySelector(targetSelector).insertAdjacentHTML(position, temp.innerHTML);
        console.log(`Componente ${path} cargado`);
    } catch (error) {
        console.error(`Error cargando ${path}:`, error);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Carga header al inicio del body
    loadComponent('/includes/header.html', 'body', 'afterbegin');
    
    // Carga footer al final del body
    loadComponent('/includes/footer.html', 'body', 'beforeend');
});