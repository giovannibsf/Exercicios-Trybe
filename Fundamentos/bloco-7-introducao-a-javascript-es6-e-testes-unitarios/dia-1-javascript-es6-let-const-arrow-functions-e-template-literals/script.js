// 🚀 Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function.
// Modifique as concatenações para template literals.
// Copie o código abaixo.


// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

// const testingScope = (escopo) => {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//       const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     // console.log(`${ifScope} o que estou fazendo aqui ? :O`); 
//   }

//   testingScope(true);





//   Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
//   Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
//   Bônus (opcional): tente fazer o mesmo exercício utilizando o métodoarray.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.
//   Copie o código abaixo.


  // let oddsAndEvens = [13, 3, 4, 10, 7, 2];
  // const ordem = (parametro) => {
  //     for(let a = parametro.length - 1; a > 0 ; a -= 1) {
  //       for(i = 0; i < a; i+=1) {
  //         if(parametro[i] > parametro[i+1]) {
  //           [parametro[i] , parametro [i + 1]] = [parametro[i+1] , parametro[i]]
  //         }
  //       }
  //     }
             
  //     return(parametro)       
  //   }
  
  //  ordem(oddsAndEvens)
  
// const ordem = () => {
//   oddsAndEvens.sort(function(a, b) {return a - b})
//   return oddsAndEvens
// }

// ordem(oddsAndEvens)
//   console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente`); 


// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.



const fat = (n) => {
  return (n > 1 ? n * fat(n-1) : 1);

} 
  
  // if(n > 1) {
  //   return n * fat(n-1);
  // }



  // Crie uma função que receba uma frase e retorne qual a maior palavra.
// const palavra = (frase) => {
//   const array = frase.split(" ")
//   let maior = " "
//   for (let i = 0; i < array.length; i +=1) {
//     if (array[i].length > maior.length) {
//       maior = array[i]
//     }
//       }
//       return maior
    
// }
    
    
  





