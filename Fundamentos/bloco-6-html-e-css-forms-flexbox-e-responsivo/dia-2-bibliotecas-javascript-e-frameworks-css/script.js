const botao = document.getElementById("botao")

function defaul(event) {
    event.preventDefault()
    console.log("fui chamada")

}

botao.addEventListener("click", defaul)


// const botaoLimpar = document.createElement("button")
// botaoLimpar.innerHTML = "LIMPAR"
// const botoes = document.getElementById("botoes")
// botoes.appendChild(botaoLimpar)
// botaoLimpar.setAttribute("type", "reset")