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

let blocoPedido = null;
let buttonExibirMais = null;
let buttonExibirMenos = null;
let status = null;
let statusAtual = null;
let statusButton = null;

let opcaoConfig = null;

let botoesConfig = null;
let secoesConfig = null;

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
        ajustarDetalhesResponsividade(login);
        window.addEventListener("resize", () => ajustarDetalhesResponsividade(login));

    } else if (paginaAtual.includes("/criar-conta.html")) {
        register = document.getElementsByClassName('register-banner')[0];
        ajustarDetalhesResponsividade(register);
        window.addEventListener("resize", () => ajustarDetalhesResponsividade(register));

    } else if (paginaAtual.includes("/index.html")) {
        containerScroll = document.getElementById('scroll-ofertas');
        oferta = document.getElementsByClassName('oferta')[0];
        larguraBlocoOferta = oferta.clientWidth + 20;

        window.addEventListener("resize", () => {
            larguraBlocoOferta = oferta.clientWidth + 20;
            containerScroll.scrollTo({ left: 0, behavior: 'smooth' });
        });

    } else if (paginaAtual.includes("/pedidos.html")) {
        statusAtual = document.getElementsByClassName("p-statusAtual");
        statusButton = document.getElementsByClassName("button-status");
        status = document.getElementsByClassName("p-status");
        blocoPedido = document.getElementsByClassName("bloco-pedido");
        buttonExibirMais = document.getElementById("exibir-mais");
        buttonExibirMenos = document.getElementById("exibir-menos");
        let count = 0;


        for (let i = 0; i < blocoPedido.length; i++) {
            if (count >= 6) {
                blocoPedido[i].style.display = "none";
            }
            count++;
        }

        buttonExibirMais.addEventListener("click", () => {
            count = 0;
            for (let i = 0; i < blocoPedido.length; i++) {
                blocoPedido[i].style.display = "flex";
            }

            buttonExibirMais.style.display = "none";
            buttonExibirMenos.style.display = "block";
        });

        buttonExibirMenos.addEventListener("click", () => {
            count = 0;
            for (let i = 0; i < blocoPedido.length; i++) {
                if (count >= 6) {
                    blocoPedido[i].style.display = "none";
                }
                count++;
            }

            buttonExibirMais.style.display = "block";
            buttonExibirMenos.style.display = "none";
        });

        statusAtual[2].innerText = "A caminho";
        statusAtual[5].innerText = "Entregue";

        for (let i = 0; i < statusAtual.length; i++) {
            ajustarDetalhesResponsividade(status[i]);
            window.addEventListener("resize", () => ajustarDetalhesResponsividade(status[i]));

            if (statusAtual[i].innerText === "") {
                statusAtual[i].innerText = "Em preparo";
            }

            if (statusAtual[i].innerText === "Em preparo") {
                statusButton[i].innerText = "Cancelar Pedido";
                statusButton[i].style.backgroundColor = "var(--cor-alerta)";
            } else if (statusAtual[i].innerText === "A caminho") {
                statusButton[i].innerText = "Falar com o entregador";
                statusButton[i].style.backgroundColor = "var(--cor-caminho)";
            } else if (statusAtual[i].innerText === "Entregue") {
                statusButton[i].innerText = "Avaliar Pedido";
                statusButton[i].style.backgroundColor = "var(--cor-entregue)";
            }

            statusButton[i].href = "https://www.youtube.com";
        }

    } else if (paginaAtual.includes("/config.html")) {
        botoesConfig = document.getElementsByClassName("opcao-config");
        secoesConfig = document.getElementsByClassName("secao-config")

        botoesConfig[0].classList.add("ativo");

        for (let i = 0; i < botoesConfig.length; i++) {
            botoesConfig[i].addEventListener("click", () => {
                for (let j = 0; j < botoesConfig.length; j++) {
                    if (j === i) {
                        continue;
                    }
                    secoesConfig[j].style.display = "none";
                    botoesConfig[j].classList.remove("ativo");
                }
                secoesConfig[i].style.display = "block";
                botoesConfig[i].classList.add("ativo");
            });
        }
    } else {
        console.log("Pagina não encontrada");
    }
});

// ============================================================
// FUNÇÕES - Ofertas (carrossel)
// ============================================================

function voltarOfertas() {
    containerScroll.scrollBy({ left: -larguraBlocoOferta, behavior: 'smooth' });
}

function avancarOfertas() {
    containerScroll.scrollBy({ left: larguraBlocoOferta, behavior: 'smooth' });
}

// ============================================================
// FUNÇÃO - Login e Cadastro (responsividade)
// ============================================================

function ajustarDetalhesResponsividade(remove) {
    if (window.innerWidth <= 640) {
        remove.classList.add("d-none");
    } else {
        remove.classList.remove("d-none");
    }
}
