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
    const certificacoesSection = document.querySelector('.certificacoes');

    function animateOnScroll() {
        const screenPosition = window.innerHeight;


        const especialidadesPosition = especialidadesSection.getBoundingClientRect().top;
        if (especialidadesPosition < screenPosition) {
            especialidadesSection.classList.add('animate');
        }


        const projetosPosition = projetosSection.getBoundingClientRect().top;
        if (projetosPosition < screenPosition) {
            projetosSection.classList.add('animate');
        }


        const formularioPosition = formularioSection.getBoundingClientRect().top;
        if (formularioPosition < screenPosition) {
            formularioSection.classList.add('animate');
        }

        const certificacoesPosition = certificacoesSection.getBoundingClientRect().top;
        if (certificacoesPosition < screenPosition) {
            certificacoesSection.classList.add('animate');
        }
    }

    function animateMenuOnLoad() {
        menuDesktop.classList.add('animate');
    }

    window.addEventListener('scroll', animateOnScroll);
    animateMenuOnLoad();
});

const text = "OLÁ, EU SOU O MATEUS!";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            document.getElementById("typing-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 150); // Ajuste a velocidade aqui
        }
    }

    window.onload = function () {
        typeWriter();
    };
