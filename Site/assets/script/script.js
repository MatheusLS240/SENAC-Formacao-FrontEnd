// ============================================================
// ELEMENTOS DO DOM
// ============================================================

let menu = document.getElementById('menu');
let buttonMenu = document.getElementById('buttonMenu');
let paginaAtual = window.location.pathname;

let register = null;
let senhaCriarConta = null;
let campoSenha = null;
let campoSenhaConfirmacao = null;
let valor = null;
let listaConfirmacoes = null;
let itemListaConfirmacoes = null;
let itemConfirmacaoSenha = null;
let containerFaltaSenha = null;

let login = null;

let containerScroll = null;
let oferta = null;
let larguraBlocoOferta = null;

let containerPedido = null;
let blocoPedido = null;
let buttonExibirMais = null;
let buttonExibirMenos = null;
let status = null;
let statusAtual = null;
let statusButton = null;
let alturaContainerPedido = null;

let opcaoConfig = null;
let botoesConfig = null;
let secoesConfig = null;

let opcoesCateg = null;
let botoesCateg = null;
let secoesCateg = null;

let ofertas = null;
let img = null;
let nome = null;
let preco = null;

// ============================================================
// MENU LATERAL
// ============================================================

buttonMenu.addEventListener("click", abrirFecharMenu);

function abrirFecharMenu() {
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
}

// ============================================================
// INICIALIZAÇÃO
// ============================================================

window.addEventListener("load", inicializarPagina);

function inicializarPagina() {
    paginaAtual = window.location.pathname;

    if (paginaAtual.includes("/login.html")) {
        inicializarLogin();
    } else if (paginaAtual.includes("/criar-conta.html")) {
        inicializarCadastro();
    } else if (paginaAtual.includes("/index.html")) {
        inicializarOfertas();
    } else if (paginaAtual.includes("/pedidos.html")) {
        inicializarPedidos();
    } else if (paginaAtual.includes("/config.html")) {
        inicializarConfiguracoes();
    } else if (paginaAtual.includes("/categorias.html")) {
        inicializarCategorias();
    } else {
        console.log("Pagina não encontrada");
    }
}

// ============================================================
// LOGIN
// ============================================================

function inicializarLogin() {
    login = document.getElementsByClassName('login-banner')[0];

    ajustarDetalhesResponsividade(login);

    window.addEventListener("resize", () =>
        ajustarDetalhesResponsividade(login)
    );
}

// ============================================================
// CADASTRO
// ============================================================

function inicializarCadastro() {
    register = document.getElementsByClassName("register-banner")[0];
    campoSenha = document.getElementById("senha");
    campoSenhaConfirmacao = document.getElementById("confirmar-senha");
    listaConfirmacoes = document.getElementById("erros");
    itemListaConfirmacoes = listaConfirmacoes.children;
    containerFaltaSenha = document.getElementsByClassName("falta-senha");

    ajustarDetalhesResponsividade(register);

    window.addEventListener("resize", () => {
        ajustarDetalhesResponsividade(register);
    });

    validarSenha();
}
function validarSenha() {
    campoSenha.addEventListener("input", () => {
        const valor = campoSenha.value;

        validar("minimo", valor.length >= 8);
        validar("maiuscula", /[A-Z]/.test(valor));
        validar("minuscula", /[a-z]/.test(valor));
        validar("numero", /\d/.test(valor));
        validar("especial", /[@$!%*?&._#\-]/.test(valor));

        if (campoSenhaConfirmacao.value !== "") {
            validar(
                "senha-diferente",
                valor === campoSenhaConfirmacao.value
            );
        }
    });

    confirmarSenhas();
}

function validar(id, valido) {
    const item = document.getElementById(id);

    if (valido) {
        item.style.display = "none";
    } else {
        item.style.display = "block";
    }

    const existePendente = [...itemListaConfirmacoes].some(
        elemento => elemento.style.display !== "none"
    );

    containerFaltaSenha[0].style.display = existePendente ? "block" : "none";
}

function confirmarSenhas() {
    itemConfirmacaoSenha = document.getElementById("senha-diferente");
    campoSenhaConfirmacao.addEventListener("input", () => {
        if (campoSenha.value !== campoSenhaConfirmacao.value) {
            itemConfirmacaoSenha.style.display = "block";
        } else {
            itemConfirmacaoSenha.style.display = "none";
        }
    });
}

// ============================================================
// OFERTAS
// ============================================================

function inicializarOfertas() {
    containerScroll = document.getElementById('scroll-ofertas');
    oferta = document.getElementsByClassName('oferta')[0];
    larguraBlocoOferta = oferta.clientWidth + 20;

    window.addEventListener("resize", () => {
        larguraBlocoOferta = oferta.clientWidth + 20;
        containerScroll.scrollTo({ left: 0, behavior: "smooth" });
    });
}

// ============================================================
// PEDIDOS
// ============================================================

function inicializarPedidos() {
    statusAtual = document.getElementsByClassName("p-statusAtual");
    statusButton = document.getElementsByClassName("button-status");
    status = document.getElementsByClassName("p-status");
    blocoPedido = document.getElementsByClassName("bloco-pedido");
    buttonExibirMais = document.getElementById("exibir-mais");
    buttonExibirMenos = document.getElementById("exibir-menos");
    containerPedido = document.getElementsByClassName("container-pedidos-conteudo")[0];

    alturaContainerPedido = containerPedido.offsetHeight + "px";

    ocultarPedidos();
    configurarResizePedidos();
    configurarBotoesPedidos();
    configurarStatusPedidos();
}

function ocultarPedidos() {
    let count = 0;

    for (let i = 0; i < blocoPedido.length; i++) {
        if (count >= 6) {
            blocoPedido[i].style.display = "none";
        }
        count++;
    }
}

function configurarResizePedidos() {
    window.addEventListener("resize", () => {
        alturaContainerPedido = containerPedido.offsetHeight + "px";
        buttonExibirMenos.click();
    });
}

function configurarBotoesPedidos() {
    buttonExibirMais.addEventListener("click", () => {
        containerPedido.style.height = containerPedido.offsetHeight + "px";
        alturaContainerPedido = containerPedido.offsetHeight;

        for (let i = 0; i < blocoPedido.length; i++) {
            blocoPedido[i].style.display = "flex";
        }

        requestAnimationFrame(() => {
            containerPedido.style.transition = "height 0.4s ease";
            containerPedido.style.height = containerPedido.scrollHeight + "px";
        });

        buttonExibirMais.style.display = "none";
        buttonExibirMenos.style.display = "block";
    });

    buttonExibirMenos.addEventListener("click", () => {
        requestAnimationFrame(() => {
            containerPedido.style.transition = "height 0.4s ease";
            containerPedido.style.height = alturaContainerPedido + "px";

            buttonExibirMais.style.display = "block";
            buttonExibirMenos.style.display = "none";

            setTimeout(() => {
                ocultarPedidos();
            }, 400);
        });
    });
}

function configurarStatusPedidos() {
    statusAtual[2].innerText = "A caminho";
    statusAtual[5].innerText = "Entregue";

    for (let i = 0; i < statusAtual.length; i++) {

        ajustarDetalhesResponsividade(status[i]);

        window.addEventListener("resize", () =>
            ajustarDetalhesResponsividade(status[i])
        );

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
}

// ============================================================
// CONFIGURAÇÕES
// ============================================================

function inicializarConfiguracoes() {
    botoesConfig = document.getElementsByClassName("opcao-config");
    secoesConfig = document.getElementsByClassName("secao-config");
    botoesConfig[0].classList.add("ativo");

    for (let i = 0; i < botoesConfig.length; i++) {

        botoesConfig[i].addEventListener("click", () => {
            for (let j = 0; j < botoesConfig.length; j++) {
                if (j === i) continue;

                secoesConfig[j].style.display = "none";
                botoesConfig[j].classList.remove("ativo");
            }

            secoesConfig[i].style.display = "block";
            botoesConfig[i].classList.add("ativo");
        });
    }
}

// ============================================================
// CATEGORIAS
// ============================================================

function inicializarCategorias() {
    botoesCateg = document.getElementsByClassName("opcoes-categ");
    secoesCateg = document.getElementsByClassName("secao-categ");
    botoesCateg[0].classList.add("ativo");

    for (let i = 0; i < botoesCateg.length; i++) {
        botoesCateg[i].addEventListener("click", () => {
            for (let j = 0; j < secoesCateg.length; j++) {
                if (j === i) continue;

                secoesCateg[j].style.display = "none";
                botoesCateg[j].classList.remove("ativo");
            }

            secoesCateg[i].style.display = "block";
            botoesCateg[i].classList.add("ativo");
        });
    }
}

// ============================================================
// FUNÇÕES - OFERTAS
// ============================================================

function voltarOfertas() {
    containerScroll.scrollBy({
        left: -larguraBlocoOferta,
        behavior: "smooth"
    });
}

function avancarOfertas() {
    containerScroll.scrollBy({
        left: larguraBlocoOferta,
        behavior: "smooth"
    });
}

// ============================================================
// RESPONSIVIDADE
// ============================================================

function ajustarDetalhesResponsividade(remove) {
    if (window.innerWidth <= 640) {
        remove.classList.add("d-none");
    } else {
        remove.classList.remove("d-none");
    }
}

// ============================================================
// REQUISITANDO JSON
// ============================================================

fetch("assets/json/dados.json")
    .then(response => response.json())
    .then(data => {
        ofertas = document.getElementsByClassName('oferta');
        for(let i = 0; i < ofertas.length; i++) {
            img = ofertas[i].getElementsByTagName("img")[0];
            nome = ofertas[i].getElementsByTagName("p")[0];
            preco = ofertas[i].getElementsByTagName("p")[1];

            img.src = data.pedidos[i].imagem_prato;
            nome.textContent = data.pedidos[i].nome;
            preco.textContent = `R$ ${data.pedidos[i].preco}`;
        }
    })
    .catch(erro => console.error('Erro ao carregar o JSON:', erro));
