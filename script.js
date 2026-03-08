const btn = document.querySelector('#toggle-theme');
const body = document.body;

btn.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'light') {
        body.removeAttribute('data-theme');
        btn.textContent = 'Modo Claro';
    } else {
        body.setAttribute('data-theme', 'light');
        btn.textContent = 'Modo Escuro';
    }
});