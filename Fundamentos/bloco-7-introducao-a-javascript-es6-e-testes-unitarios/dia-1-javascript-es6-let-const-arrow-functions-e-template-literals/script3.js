// Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.

const funcao = (param, string) => {
    if(string.includes('x') == true) {
        let novaString = string.replace('x', param)
        return novaString
    }
    
}



// console.log(funcao("bebeto", "Tryber x aqui!"))

// Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.
// Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.


const skills = ["HTML", "javascrip", "CSS", "flexbox", "testes unitários"]
const novaString = funcao("bebeto", "Trybe x aqui!")

const concat = () => {
    
    let concatena = `${novaString} \nMinhas cinco principais habilidades sao: ${skills.sort()}`
    console.log(concatena)
    
}
concat()