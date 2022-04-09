// Vamos iniciar com um exemplo do que o NOT é capaz, você consegue prever o que esse código vai imprimir?
// Copiar
//   console.log((2 + 2) === 4);
// Isso aqui deve nos retornar true , não é? Afinal, 2 + 2 resultar em 4 é uma declaração verdadeira. Agora, se adicionarmos o operador NOT antes dessa declaração?
// Copiar
//   console.log(!(2 + 2) === 4);
// Se você executar esse código, vai perceber que o valor impresso é o oposto do anterior. 🤔
// Estamos diante de um operador muito poderoso. Ele pode inverter o valor booleano de um elemento. Isso mesmo!! Se tivermos uma variável ou valor considerado true , podemos gerar o resultado oposto simplesmente fazendo !variável . Ou seja, false .
// Então, sabendo que o resultado original da operação ali em cima é true , quando a gente insere o operador NOT antes da operação, teremos o valor contrário a nossa resposta final, que é false .
// Vale lembrar que o conceito de truthy e falsy também se aplica aqui, por isso não estamos limitados apenas aos tipos primitivos booleanos. Podemos usar em:
// Strings...

// const squirtle = "melhor pokemon inicial";

// console.log(!squirtle); // false

// console.log(!42); // false

// console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.

// Valores nulos...

// console.log(!null); // true

// Valores indefinidos..


// console.log(!undefined); // true


// ...e em muitos outros elementos. As possibilidades são enormes!!!

console.log(!null)