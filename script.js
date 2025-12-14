document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('in-view');
    });

    const moonIcon = document.querySelector('.moon-icon i');
    const body = document.body;

    // Modo escuro
    moonIcon.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            moonIcon.classList.remove('fa-moon');
            moonIcon.classList.add('fa-sun');
        } else {
            moonIcon.classList.remove('fa-sun');
            moonIcon.classList.add('fa-moon');
        }
    });

    // Rolagem suave
    const links = document.querySelectorAll('header nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // EmailJS
    emailjs.init("3wtmrcrVzlehOUQS4");

    const form = document.getElementById('form-contato');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        emailjs.sendForm('service_xi0xcum', 'template_jtxxk3q', this)
            .then(() => {
                alert("Mensagem enviada com sucesso!");
                form.reset();
            }, (error) => {
                alert("Erro ao enviar: " + JSON.stringify(error));
            });
    });
});

// Menu hamburguer toggle
const hamburguer = document.getElementById('hamburguer');
const navMenu = document.getElementById('nav-menu');

hamburguer.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link (em telas pequenas)
const navLinks = document.querySelectorAll('#nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});