const numbers = [50, 85, -30, 3, 15, 150];


const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 175);
console.log(bigger); // 85