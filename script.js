let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')


btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})


document.addEventListener('DOMContentLoaded', function() {
    const especialidadesSection = document.querySelector('.especialidades');
    const projetosSection = document.querySelector('.projetos');
    const formularioSection = document.querySelector('.formulario');
    const menuDesktop = document.querySelector('.menu-desktop');

    function animateOnScroll() {
        const screenPosition = window.innerHeight;

        // Animação para a seção especialidades
        const especialidadesPosition = especialidadesSection.getBoundingClientRect().top;
        if (especialidadesPosition < screenPosition) {
            especialidadesSection.classList.add('animate');
        }

        // Animação para a seção projetos
        const projetosPosition = projetosSection.getBoundingClientRect().top;
        if (projetosPosition < screenPosition) {
            projetosSection.classList.add('animate');
        }

        // Animação para a seção formulario (Fala Comigo)
        const formularioPosition = formularioSection.getBoundingClientRect().top;
        if (formularioPosition < screenPosition) {
            formularioSection.classList.add('animate');
        }
    }

    function animateMenuOnLoad() {
        menuDesktop.classList.add('animate');
    }

    window.addEventListener('scroll', animateOnScroll);
    animateMenuOnLoad();
});
