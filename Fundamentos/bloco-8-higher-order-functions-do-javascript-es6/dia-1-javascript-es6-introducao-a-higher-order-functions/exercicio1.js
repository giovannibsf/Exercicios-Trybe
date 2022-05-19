
// Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const obj = (nome) => { 
    return { 
        nomeCompleto: nome, email: `${nome.replace(' ', '_').toLowerCase()}@trybe.com`, 
    }
} 


const newEmployees = (funcao,) => {
    const employees = {
        id1: funcao('Pedro Guerra'),
        id2: funcao('Luiza Drumond'),
        id3: funcao('Carla Paiva')
    }
    return employees
}




// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou")

const verifica = (num1, num2) => num1 == num2;

  

const sorteio = (verifica, apostado) => {
    const sorteado = Math.round(Math.random() * 5)
    
    if(verifica(sorteado, apostado)) {
        return "Parabéns, você ganhou!"
    }
    return "Tente novamente"
}



// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const conta = (gabarito , respondidas, checa) => {
    let nota = 0;
    for(let i = 0; i < gabarito.length; i+=1) {
        const comparacao = checa(gabarito[i], respondidas[i])
        nota += comparacao;
    }
    return nota
}

const compara = (gabarito, resposta) => {
    if( gabarito === resposta) {
        return 1;
    } if(resposta === 'N.A') {
        return 0;
    }
    return -0.5
}


const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
console.log(conta(RIGHT_ANSWERS, STUDENT_ANSWERS, compara))






