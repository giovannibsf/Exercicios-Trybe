// const botao = document.getElementById("botao")

// function defaul(event) {
//     event.preventDefault()
//     console.log("fui chamada")

// }

// botao.addEventListener("click", defaul)


// const botaoLimpar = document.createElement("button")
// botaoLimpar.innerHTML = "LIMPAR"
// const botoes = document.getElementById("botoes")
// botoes.appendChild(botaoLimpar)
// botaoLimpar.setAttribute("type", "reset")

// function objeto(nome, idade) {
//     return {
//         nome: nome,
//         idade: idade
//     }
// }

// console.log(objeto("joaquim", 35))



const objeto = (nome, idade) => ({nome: nome, idade: idade})

console.log(objeto("joaquim", 35))

