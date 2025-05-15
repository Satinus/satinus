// Menu toggle para móviles
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('header__menu-toggle')) {
        const nav = document.querySelector('.header__nav');
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    }
});