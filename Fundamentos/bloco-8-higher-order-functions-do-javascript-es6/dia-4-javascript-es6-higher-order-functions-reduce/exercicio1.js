// const numbers = [50, 85, -30, 3, 15, 150];


// const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

// const bigger = numbers.reduce(getBigger, 175);


const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];


const somatorio = (acc, cur) => acc + cur

const soma = () => {
    return numbers.filter((item) => item % 2 === 0).reduce(somatorio, 0)
    
}


// const somatorio2 = (currentValue, number) => (
//     (number % 2 === 0) ? currentValue + number : currentValue
//   );
  
//   const soma2 = (array) => array.reduce(somatorio2, 0);

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
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
  ];


  const conferiNota = (acc, crr) => {
     if(acc.nota > crr.nota) {
         return acc;
     }  
        return crr;
  }

  const relatorio = (array) => array.map((element) => ({
      name: element.nome,
      materia: element.materias.reduce(conferiNota).name}))


  

  console.log(relatorio(estudantes))


// const getBestClass = (acc, materia) => {
//     if (acc.nota > materia.nota) return acc;
//     return materia;
//   };
  
//   const reportBetter = (students) => students.map((student) => ({
//     name: student.nome,
//     materia: student.materias.reduce(getBestClass).name}));
  
//   console.log(reportBetter(estudantes));