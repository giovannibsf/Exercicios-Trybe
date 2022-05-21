//   const musicas = [
//     { id: '31031685', title: 'Partita in C moll BWV 997' },
//     { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//     { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
//   ]
  
//   function findMusic(id) {
//     return musicas.find((element) => element.id == id)
// }
  
//   console.log(findMusic('31031685')) 





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
  
// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
function authorBornIn1947() {
    return books.find(book => book.author.birthYear === 1947).author.name;
  }
  




// 2 = retrorne o nome do livro de menor nome

function smallerName() {
    let nameBook = books[0].name;
    books.forEach((element) => {
        if (element.name.length < nameBook.length) {
            nameBook = element.name
        }
    })
   
    return nameBook;
  }

  



//3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

function getNamedBook() {
   return books.find((element) => element.name.length === 26)
  }




// 4 - Ordene os livros por data de lançamento em ordem decrescente.

books.sort((a,b) => b.releaseYear - a.releaseYear)


// console.log(books[0].releaseYear)


//5 - - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.


function everyoneWasBornOnSecXX() {
    return books.every((element) => element.author.birthYear >= 1900 && element.author.birthYear <= 1999)
}




// 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
function someBookWasReleaseOnThe80s() {
    return books.some((element) => element.releaseYear >= 1980 && element.releaseYear <= 1989)
  }
  


function authorUnique() {
  let idadeAutoresNaoSaoIguais = true;
  books.forEach((element) => {
    if (books.some((item) => element.author.birthYear == item.author.birthYear)) {
      idadeAutoresNaoSaoIguais = false
    }
  }); if(idadeAutoresNaoSaoIguais == false) {
    return false
  } return idadeAutoresNaoSaoIguais
}
console.log(authorUnique())





// function authorUnique() {
//   books.forEach((element) => {
//     if (books.some((item) => element.author.birthYear == item.author.birthYear)) {
//       return false
//     } return true
//   })
    
//   }

//   console.log(authorUnique())


