document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const modoClaroOscuro = document.getElementById('modos');

    if (localStorage.getItem('mode') === 'dark') {
        body.classList.add('dark-mode');
    } else {
        body.classList.add('light-mode');
    }

    modoClaroOscuro.addEventListener('click', function () {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('mode', 'dark');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('mode', 'light');
        }
    });
});