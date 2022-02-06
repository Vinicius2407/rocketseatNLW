// char - string
// number = 1,2,3,4,5,6,7
// boolean = verdadeiro ou falso

// dados como objeros = { name: "carro", cor: "vermelho" }
// funçao tem como funcionalidade agrupar uma sequencia de passos de códigos
// toda vez que tem um nome seguido de um par de parenteses, quer dizer que ele é uma função
// dentro dos parenteses tem algo que chamamos de ARGUMENTOS ou PARAMETROS
// objeto = conjunto de atributos ou funcionalidades

// var = nome (a qualquer momento posso atribuir outro valor a isso)
// const = name (não pode ser mudado em momento algum do script)

// DOM  Document Object Model


/* Menu Event List */
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");
for(const element of toggle) {
    element.addEventListener("click", function() {
        nav.classList.toggle("show");
    })
}

/* Closed Menu */
const links = document.querySelectorAll("nav ul li a")
for(const link of links) {
    link.addEventListener("click", function() {
        nav.classList.remove("show");
    })
}

/* Mudar o header ao usar scroll */
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;
function changeHeaderWhenScroll() {

    if(window.scrollY >= navHeight) {
        //scroll maior que a altura do header
        header.classList.add("scroll");
    } else {
        //menor que a altura do header
        header.classList.remove("scroll");
    }

}

// Testimonials carousel slider Swiper
const swiper = new Swiper(".swiper", {
    slidesPerview: 1,
    pagination: {
        el: ".swiper-pagination"
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true,
        }
    }
});

// ScrollReveal: Mostrar elementos quando der scroll na página
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .text, #home .image,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links`, 
{ interval: 100})

// Botão voltar para o topo de
function backToTop() {
const backToTopButton = document.querySelector(".back-to-top");
if (window.scrollY >= 560) {
    backToTopButton.classList.add("show");
}else {
    backToTopButton.classList.remove("show");
}
}

// Menu ativo conforme a seção visivel na Pagina
const sections = document.querySelectorAll("main section[id]");
function activateMenuAtCurrentSection(){

    const checkPoint = window.pageYOffset + (window.innerHeight / 8) * 4;

    for( const section of sections ) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        const checkPointStart = checkPoint >= sectionTop;
        const checkPointEnd = checkPoint <= sectionTop + sectionHeight;

        if(checkPointStart && checkPointEnd) {
            document.querySelector("nav ul li a[href*=" + sectionId + "]")
            .classList.add("active");
        } else {
            document.querySelector("nav ul li a[href*=" + sectionId + "]")
            .classList.remove("active");
        }

    }

}    

// Eventos de Rolagem
window.addEventListener("scroll", function () {
    changeHeaderWhenScroll();
    backToTop();
    activateMenuAtCurrentSection();
});