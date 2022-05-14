// exercicio 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

// const a = 5;
// const b = 8;
// console.log (a + b);

// console.log (a - b);

// console.log(a * b);

// console.log (a / b)

// console.log (a % b)  //Retorna o resto da divisão em números inteiros do número da esquerda pelo número da direita.

// exercicio 2 e 3:
// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
// const a = 5;
// const b = 8;
// const c = 15;

// if (a > b && a > c) {
//     console.log(a)
// } else if ( b > a && b > c) {
//     console.log(b)
// }   else {console.log(c)}

//exercicio 4:
// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

// const a = 0;
// if (a > 0) {
//     console.log("positivo");
// } else if (a < 0) {
//     console.log("negativo");
// } else {
//     console.log("zero")
// }

// exercicio 5:
// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

// const a = 60;
// const b = 40;
// const c = 80;
// const triangulo = a + b + c;
// if (triangulo == 180) {
//     console.log(true);
// }   else if(triangulo != 180) {
//     console.log(false);
// }  else{

// }
//     console.log(erro);

// exercicio 6
// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

// let pecaXadrez = "PEAO";
//     switch (pecaXadrez.toLowerCase()) {
//         case "torre":
//             console.log(pecaXadrez + " anda em linhas retas")
//             break;
        
//         case "rainha":
//             console.log(pecaXadrez + " se movimenta em qualquer direção")
//             break;

//         case "bispo":
//             console.log(pecaXadrez + " se movimenta na diagonal")
//             break;

//         case "peao":
//             console.log(pecaXadrez + " se movimenta somente para a frente")
//             break;

//         case "cavalo":
//             console.log(pecaXadrez + " se movimenta sempre em L")
//             break;

//         case "rei":
//             console.log(pecaXadrez + " movimenta somente uma casa em qualquer direção")
//             break;
        
//         default:
//             console.log("erro")
//     }

// exercicio 7:
// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

// let porcentagem = 75;
// if (porcentagem >= 90&& porcentagem <= 100) {
//     console.log("A")
// } else if(porcentagem >= 80) {
//     console.log("B")
// } else if(porcentagem >= 70){
//     console.log("C")
// } else if(porcentagem >= 60) {
//     console.log("D")
// } else if(porcentagem >= 50) {
//     console.log("E")
// } else if(porcentagem < 50) {
//     console.log("F")
// } else if(porcentagem < 0 || porcentagem > 100) {
//     console.log("ERRO")
// }
// // 

//exercicios 8
// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

// const a = 3 ;
// const b = 4;
// const c = 2;

// // if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
// //     console.log("true")
// // } else {
// //     console.log("false")
// // }

// exercicio 9
// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false 
// if ( a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0){
//     console.log("true")
// } else {
//     console.log(false)
// }

// exercicio 10
// const custoProduto = 10;
// const valorVenda = 15;
// const imposto = (20/100) * custoProduto;
// const custoTotalProducao = custoProduto + imposto
// const lucro = valorVenda - custoTotalProducao
// if (custoProduto < 0 || valorVenda < 0) {
//     console.log("ERRO")
// } else {console.log(1000 * (valorVenda - custoTotalProducao))
// }

// exercicio 11
let salarioBruto = 5000;
let salarioBase;
let salarioLiquido;
if (salarioBruto <= 1556.94) {
    salarioBase = salarioBruto - (8/100 * salarioBruto)
} else if(salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    salarioBase = salarioBruto - (9/100 * salarioBruto)
} else if(salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    salarioBase = salarioBruto - (11/100 * salarioBruto)
} else {salarioBase = salarioBruto - 570.88};
console.log(salarioBase)
if(salarioBase <= 1903.98) {
    salarioLiquido = salarioBase
} else if(salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    salarioLiquido = salarioBase - ((7.5/100 * salarioBase) - 142.8)
} else if(salarioBase >= 2826.66 && salarioBase < 3751.05) {
    salarioLiquido = salarioBase - ((15/100 * salarioBase) - 354.8)
} else if(salarioBase >= 3751.06 && salarioBase < 4664.68) {
    salarioLiquido = salarioBase - ((22.5/100 * salarioBase) - 636.13)
} else{salarioLiquido = salarioBase - ((27.5/100 * salarioBase) - 869.36)
}
console.log(salarioLiquido)

 