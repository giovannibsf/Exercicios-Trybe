// //array.filter

// const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const removeStudentByName = (name, listStudents) =>
//   listStudents.filter((student) => student !== name);
//   // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.
const newListStudents = removeStudentByName('Jorge', arrayMyStudents);







animais = [
  {
    nome: 'Fumaça',
    idade: 3,
    tipo: 'cao'
  },
  {
    nome: 'Tobby',
    idade: 6,
    tipo: 'cao'
  },
  {
    nome: 'Laminha',
    idade: 1,
    tipo: 'gato'
  },
  {
    nome: 'Nutella',
    idade: 3,
    tipo: 'cao'
  },
  ];

  
 const reduz = () => { 
  return animais.reduce((acc, crr) =>{
  if (crr.tipo === 'cao') {
    return acc += (crr.idade * 7);
  } else return acc
}, 0)
 }

 console.log(reduz())



 //   let nomes = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'Bruce'];

// let quantidadeNomes = nomes.reduce( (todosNomes, nome) => {
//   console.log(todosNomes)
//   console.log(nome)
//   if(nome in todosNomes) {
//     console.log(todosNomes )
//     todosNomes[nome]++
//     console.log(todosNomes)
//   } else{
//     todosNomes[nome] = 1
//   }
//   return todosNomes
// }, {});


var numeros = [0, 1, 2, 3, 4, 5, 6];
var numeros1 = [15, 20, 20, 45, 67]

var total = numeros.reduce((acc, crr) => acc + crr, 
numeros1.reduce((acc, crr) => acc+crr))








// const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
// const prices = [2.99, 3.99, 1.5, 2];


// const fazArray = (elemento1, elemento2) => elemento1.map((item1, item2) => 
//     ({ [item1]: elemento2[item2]} )
// )

// const novoArray = fazArray(products, prices);
// console.log(novoArray)


const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];
// Buscar um estudante pelo nome e retornar a situação dele em cada matéria:

// const newListStudents = removeStudentByName('Jorge', arrayMyStudents);
// // console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]




const situacao = (param1, array) => {
  let estudante = array.find((element) => (param1 == element.nome))
  return estudante.materias.map((element) => (element.nota > 60) ? 'aprovado' : 'reprovado')
   }


console.log(situacao('Natalia', estudantes))
