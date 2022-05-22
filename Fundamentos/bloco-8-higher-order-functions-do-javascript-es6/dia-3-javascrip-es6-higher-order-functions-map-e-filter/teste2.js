
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
