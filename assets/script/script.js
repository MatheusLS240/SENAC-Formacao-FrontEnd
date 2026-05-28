const menu = document.getElementById('menu');

function openMenu() {
    menu.classList.toggle("active");
}

const containerScroll = document.getElementById('scroll-ofertas');
const blocoOferta = document.getElementsByClassName('oferta')[0];
const larguraBlocoOferta = (blocoOferta.clientWidth) + 20;

function voltarOfertas() {
    containerScroll.scrollBy({
        left: -larguraBlocoOferta,
        behavior: 'smooth'
    });
}

function avancarOfertas() {
    containerScroll.scrollBy({
        left: larguraBlocoOferta,
        behavior: 'smooth'
    });
}