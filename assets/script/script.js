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
// ------------------------------------------------

// let nota1 = prompt("Insira a primeira nota");
// let nota2 = prompt("Insira a segunda nota");
// let nota3 = prompt("Insira a terceira nota");

// let res = (nota1 + nota2 + nota3) / 3;

// if(res >= 7) {
//     console.log("Aprovado");
// } else if(res >= 5) {
//     console.log("Recuperação");
// } else {
//     console.log("Reprovado");
// }

// ------------------------------------------------

// let num1 = prompt("Insira um número");

// if(num1 > 0) {
//     print("Ele é positivo");
// } else if (num1 < 0) {
//     print("Ele é negativo");
// } else {
//     print("Ele é zero");
// }

// ------------------------------------------------

// let num1 = prompt("Insira um número");

// if(num1 % 2 == 0) {
//     print("Ele é par");
// } else {
//     print("Ele é impar");
// }

// ------------------------------------------------

// let nums = [];
// let maior = 0;
// let repetido = false;

// for (let i = 1; i <= 3; i++) {
//     let entrada = prompt(`Digite o ${i}º número:`);

//     let numero = Number(entrada);
//     if (isNaN(numero)) {
//         alert("Valor inválido! Digite apenas números.");
//         i--;
//     } else {
//         nums.push(numero);
//     }
// }

// for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//         if (i == j) {
//             continue;
//         } else {
//             if (nums[i] < nums[j]) {
//                 maior = nums[j];
//             } else if (nums[i] > nums[j]) {
//                 maior = nums[i];
//             } else {
//                 repetido = true;
//             }
//         }
//     }
// }

// if (repetido) {
//     alert(`Entre os numeros inseridos, temos 2 números maiores de mesmo valor, ambos ocupam o primeiro lugar`);
// }

// alert(`O maior valor é ${maior}`);