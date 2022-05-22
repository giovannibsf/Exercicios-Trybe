// //array.filter

// const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const removeStudentByName = (name, listStudents) =>
//   listStudents.filter((student) => student !== name);
//   // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

// const newListStudents = removeStudentByName('Jorge', arrayMyStudents);
// // console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]


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

const situacao = (param1, array) => {
  let estudante = array.find((element) => (param1 == element.nome))
  return estudante.materias.map((element) => (element.nota > 60) ? 'aprovado' : 'reprovado')
 

  }



console.log(situacao('Natalia', estudantes))




const bigger = numbers.reduce(getBigger, 175);





const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];


const somatorio = (acc, cur) => acc + cur

const soma = () => {
    return numbers.filter((item) => item % 2 === 0).reduce(somatorio, 0)
    
}


// const somatorio2 = (currentValue, number) => (
//     (number % 2 === 0) ? currentValue + number : currentValue
//   );
  
//   const soma2 = (array) => array.reduce(somatorio2, 0);