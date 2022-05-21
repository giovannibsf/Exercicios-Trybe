const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];

//   🚀 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
  
  function formatedBookNames() {
      return books.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`)

  }
  



//   🚀 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

const namAndAge = () => {
    let newArray = books.map((element) => ({age: (element.releaseYear - element.author.birthYear), author: element.author.name}))
    return newArray.sort((a,b) => a.age - b.age)

}



// 🚀 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
function fantasyOrScienceFiction() {
    return books.filter((element) => element.genre == 'Fantasia' || element.genre == 'Ficção Científica')
  }

  




//   🚀 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
function oldBooksOrdered() {
    let newArray = books.filter((element) => ((2022 - element.releaseYear) > 60))
    return newArray.sort((a,b) => (a.releaseYear - b.releaseYear))

  }
 


//   🚀 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

function fantasyOrScienceFictionAuthors() {
    let newArray = books.filter((element) => element.genre == 'Fantasia' || element.genre == 'Ficção Científica').map((autor) => autor.author.name)
    
    return newArray.sort()
  }

  
  


  //🚀 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
  function oldBooks() {
      return books.filter((element) => (2022 - element.releaseYear) > 60).map((item)=> item.name)
  }

  
  

  //🚀 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

  function authorWith3DotsOnName() {
    return books.filter((element)=> element.author.name[1] == '.' && element.author.name[4] == '.' && element.author.name[7] == '.')[0].name
  }

  //outra forma de resolver: 
  function authorWith3DotsOnName() {
    return books.find((element) => (
      element.author.name.split(' ')
        .filter((item) => item.endsWith('.')).length === 3
    )).name;
  }