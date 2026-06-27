// ============================================================
// ELEMENTOS DO DOM
// ============================================================

let menu = document.getElementById('menu');
let buttonMenu = document.getElementById('buttonMenu');
let paginaAtual = null;
let register = null;
let login = null;
let containerScroll = null;
let oferta = null;
let larguraBlocoOferta = null;

// ============================================================
// MENU LATERAL - Abrir/Fechar
// ============================================================

buttonMenu.addEventListener("click", () => {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        menu.classList.add("desactive");

        menu.addEventListener("animationend", function hide() {
            menu.style.display = "none";
            menu.removeEventListener("animationend", hide);
        });
    } else {
        menu.style.display = "block";
        menu.classList.remove("desactive");
        menu.classList.add("active");
    }
});

// ============================================================
// INICIALIZAÇÃO - Configurações por página
// ============================================================

window.addEventListener("load", () => {
    paginaAtual = window.location.pathname;
    register = document.getElementsByClassName('register-banner')[0];
    login = document.getElementsByClassName('login-banner')[0];

    if (paginaAtual === "/Site/login.html") {
        ajustarLogin();
        window.addEventListener("resize", ajustarLogin);
    }

    else if (paginaAtual === "/Site/criar-conta.html") {
        ajustarRegister();
        window.addEventListener("resize", ajustarRegister);
    }

    else if (paginaAtual === "/Site/index.html") {
        containerScroll = document.getElementById('scroll-ofertas');
        oferta = document.getElementsByClassName('oferta')[0];

        larguraBlocoOferta = oferta.clientWidth + 20;
    }
});

// ============================================================
// FUNÇÕES - Ofertas (carrossel)
// ============================================================

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

// ============================================================
// FUNÇÕES - Login e Cadastro (responsividade)
// ============================================================

function ajustarLogin() {
    const larguraTela = window.innerWidth;

    if (larguraTela <= 640) {
        login.classList.add("d-none");
    } else {
        login.classList.remove("d-none");
    }
}

function ajustarRegister() {
    const larguraTela = window.innerWidth;

    if (larguraTela <= 640) {
        register.classList.add("d-none");
    } else {
        register.classList.remove("d-none");
    }
}