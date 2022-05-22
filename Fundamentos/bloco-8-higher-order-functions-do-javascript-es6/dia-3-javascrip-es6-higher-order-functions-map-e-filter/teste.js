//array.filter

const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) =>
  listStudents.filter((student) => student !== name);
  // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

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




