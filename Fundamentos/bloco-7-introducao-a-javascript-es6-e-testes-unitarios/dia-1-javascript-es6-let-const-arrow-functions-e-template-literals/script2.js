const botao = document.getElementById("botao")
let mostrador = document.getElementById("contagem")
let clickCount = 0

const conta = () => {
    clickCount += 1
    mostrador.innerText = clickCount
}

botao.addEventListener("click", conta)


