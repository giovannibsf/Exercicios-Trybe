const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  

//   Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const turnoNoturno = (objeto, chave, valor) => {
    let turno = chave
    objeto.turno = valor
    return objeto
}

turnoNoturno(lesson2, 'turno', 'noite')





//2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const keys = (objeto) => {
    return Object.keys(objeto)
}




//3 - Crie uma função para mostrar o tamanho de um objeto.

const tamanho = (objeto) => {
    return Object.entries(objeto).length
}



//4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const valores = (objeto) => {
    return Object.values(objeto);
}



//5 - Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:



const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

// let allLessons = {
//   lesson1,
//   lesson2,
//   lesson3
// }



// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const somaEstudantes = () => {
  const estudaUm = allLessons.lesson1["numeroEstudantes"];
  const estudaDois = allLessons.lesson2["numeroEstudantes"];
  const estudaTres = allLessons.lesson3["numeroEstudantes"];
  return (estudaUm) + (estudaDois) + (estudaTres)
}




// 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto
const valor = (chave, posicao) =>{
  const array = Object.values(allLessons[chave])
  return array[posicao]
}

// console.log(valor("lesson1", 2));



//8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave

const funcao = (objeto, chave, valor) => {
  
  if(objeto[chave].includes(valor)) {
    return true
   
  }  

  return "nao tem"
}






// Bonus - 🚀 Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
const quantidade = (chave, valor) =>{
  var nEstudantes = 0
  const array =  Object.entries(allLessons)
  for(i=0; i < array.length; i+=1) {
    if(array[i][1][chave].includes(valor)) {
      nEstudantes = nEstudantes + array[i][1]['numeroEstudantes']
    }
  }  
  return nEstudantes  

  }
 

// 🚀 Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const pegarMateriaEstudante = (objeto, professor) => {
  let estudantes = 0;
  let materias= []
  const array = Object.values(objeto)
  for (let i=0; i< array.length; i+=1) {
    if(array[i]['professor'].includes(professor)) {
      estudantes += array[i]['numeroEstudantes']
      materias.push(array[i]['materia'])
    }
  }
  return {materiasTotais: materias, estudantesTotais: estudantes}

}
const relatorio = (objeto, professor) => {
  let relato = {}
  relato['professor'] = professor
  Object.assign(relato, pegarMateriaEstudante(allLessons, professor))
  return relato
}
console.log(relatorio(allLessons, 'Maria Clara'))

/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */