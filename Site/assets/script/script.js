// ============================================================
// ELEMENTOS DO DOM
// ============================================================

let menu = document.getElementById('menu');
let buttonMenu = document.getElementById('buttonMenu');
let paginaAtual = window.location.pathname;
let register = null;
let login = null;
let containerScroll = null;
let oferta = null;
let larguraBlocoOferta = null;
let status = null;
let statusAtual = null;
let statusButton = null;

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

    if (paginaAtual.includes("/login.html")) {
        login = document.getElementsByClassName('login-banner')[0];
        ajustarLoginRegister(login);
        window.addEventListener("resize", () => ajustarLoginRegister(login));
    } else if (paginaAtual.includes("/criar-conta.html")) {
        register = document.getElementsByClassName('register-banner')[0];
        ajustarLoginRegister(register);
        window.addEventListener("resize", () => ajustarLoginRegister(register));
    } else if (paginaAtual.includes("/index.html")) {
        containerScroll = document.getElementById('scroll-ofertas');
        oferta = document.getElementsByClassName('oferta')[0];

        larguraBlocoOferta = oferta.clientWidth + 20;
    } else if (paginaAtual.includes("/pedidos.html")) {
        statusAtual = document.getElementsByClassName("status-p");
        statusButton = document.getElementsByClassName("button-status");

        for (let i = 0; i < statusAtual.length; i++) {
            statusAtual[i].innerText = "Em preparo";
            statusAtual[i].classList.add(`status-${i}`);
            statusButton[i].classList.add(`status-${i}`);
        }

        statusAtual[2].innerText = "A caminho";
        statusAtual[5].innerText = "Entregue";

        for (let i = 0; i < statusAtual.length; i++) {
            if (statusAtual[i].innerText === "Em preparo") {
                statusButton[i].innerText = "Cancelar Pedido";
            } else if (statusAtual[i].innerText === "A caminho") {
                statusButton[i].innerText = "Falar com o entregador";
                statusButton[i].style.backgroundColor = "var(--cor-caminho)";
            } else if(statusAtual[i].innerText === "Entregue") {
                statusButton[i].innerText = "Avaliar Pedido";
                statusButton[i].style.backgroundColor = "var(--cor-entregue)";
                statusButton[i].href = "https://www.youtube.com";
            }
        }
    } else {
        console.log("Pagina não encontrada");
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
// FUNÇÃO - Login e Cadastro (responsividade)
// ============================================================

function ajustarLoginRegister(removeLoginRegister) {
    const larguraTela = window.innerWidth;

    if (larguraTela <= 640) {
        removeLoginRegister.classList.add("d-none");
    } else {
        removeLoginRegister.classList.remove("d-none");
    }
}