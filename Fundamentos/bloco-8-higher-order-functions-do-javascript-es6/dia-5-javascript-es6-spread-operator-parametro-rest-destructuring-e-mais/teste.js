// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'manga', 'laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite em po', 'granola', 'leite condensado'];

const fruitSalad = (param1, param2) => {
  const salada = [...param1, ...param2]
  return salada
};




const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];






const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);


// definindo o objeto
const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      nome: 'Tatooine',
      population: '200000',
    },
  };
  
  // desestruturando o objeto:
  const { name, age, homeWorld: { nome }, description: { jedi } } = character;
  
  // imprimindo os valores:
  (`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${nome} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);



const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
  };
  
  const { workDays, weekend } = daysOfWeek;
  console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  console.log(weekend); // ['Saturday', 'Sunday']
  //juntar tudo

  const weekdays = [...workDays, ...weekend]



  const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };
  const nome2 = student.a;//adicionando à variavel o 'endereço' do valor Maria
   // Maria



  const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };
  
  const printProductDetails = ({ name, price, seller }) => {
    (`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
  };
  
  printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas
 


//   1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise. Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.

const user = {
    name3: 'Maria',
    age2: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };


  const newObject = {
      ...user,
      ...jobInfos
  }

 const { name3, age2, nationality, profession, squad, squadInitials} = newObject


 console.log(`oi, meu nome é ${name3}, tenho ${age2} anos, sou ${nationality}, trabalho com ${profession}, no esquadrao ${squad} e as iniciais do meu squad sao ${squadInitials}`)
//  2 - Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.



//1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const ola = saudacoes[0]
const sauda = saudacoes[1]
sauda(ola)


// 2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

let array = ['arroz', 'água', 'gato']
 comida = array[0]
 animal= array[2]
 bebida = array[1]

//console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// 3 - array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.


let numerosPares = [1, 3, 5, 6, 8, 10, 12];

let a = [numerosPares[3], numerosPares[4], numerosPares[5], numerosPares[6]]
numerosPares = a

//console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo




const person = {
  nome: 'Joao',
  ultimoNome: 'Jr',
  idade: 34,
};
const { nacionalidade = 'brasileiro' } = person
//console.log(nacionalidade)

const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

//console.log(x); // 1
//console.log(y); // 2
//console.log(z); // 0


// Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined. Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian.

const getNationality = ( firstname, nationality ) => `${firstname} is ${nationality}`;

const person1 = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};


const { nationality1 = 'brazilian'} = person1

console.log(getNationality(person1.firstName, nationality1 ))




const getPosition = (latitude, longitude) => {
  return {
  latitude,
  longitude,
  }
};

// console.log(getPosition(-19.8157, -43.9542));


// const greeting = (user) => console.log(`Welcome ${user}!`);

// greeting(); // Welcome undefined!


const multiply = (number, value = 1) => {
  return number * value
};

console.log(multiply(8, 9));