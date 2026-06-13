const menu = document.getElementById('menu');
const buttonMenu = document.getElementById('buttonMenu');

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

// ------------------------------------------------

const containerScroll = document.getElementById('scroll-ofertas');
let larguraBlocoOferta = 0;

window.addEventListener("load", () => {
    larguraBlocoOferta = (document.getElementsByClassName('oferta')[0].clientWidth) + 20;
})

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

// ------------------------------------------------

// var fruta = 'mamao';

// if (fruta == 'morango') {
//     console.log("Morango!");
// } else if (fruta == 'mamao') {
//     console.log("Mamão");
// } else {
//     console.log("Fruta não encontrada!");
// }

// ------------------------------------------------

// var fruta = 'mamao';

// switch (fruta) {
//     case 'morango':
//         console.log('Morango!');
//         break;
//     case 'mamao':
//         console.log('Mamão');
//         break;
//     default:
//         console.log('Fruta não encontrada');
// }

// ------------------------------------------------

// dia = new Date().getDay();
// console.log(dia);

// switch (dia) {
//     case 0:
//         console.log("Domingo");
//         break
//     case 1:
//         console.log("Segunda");
//         break;
//     case 2:
//         console.log("Terça");
//         break;
//     case 3:
//         console.log("Quarta");
//         break;
//     case 4:
//         console.log("Quinta");
//         break;
//     case 5:
//         console.log("Sexta");
//         break;
//     case 6:
//         console.log("Sabado");
//         break;
//     default:
//         console.log("Dia inexistente!")
// }

// // ------------------------------------------------

// for(let i = 1; i <= 20; i++) {
//     console.log(i);
// }

// console.log("------------------------------------------------")

// for(let i = 20; i >= 1; i--) {
//     console.log(i);
// }

// console.log("------------------------------------------------")

// for(let i = 0; i <= 50; i += 2) {
//     console.log(i);
// }

// console.log("------------------------------------------------")

// let num = prompt("Insira um número para tabuada");

// for(let i = 0; i <= 10; i++) {
//     console.log(num * i);
// }

// console.log("------------------------------------------------")

// let piramide = "*";
// for(i = 0; i <= 5; i++) {
//     console.log(piramide)
//     piramide += "*";
// }