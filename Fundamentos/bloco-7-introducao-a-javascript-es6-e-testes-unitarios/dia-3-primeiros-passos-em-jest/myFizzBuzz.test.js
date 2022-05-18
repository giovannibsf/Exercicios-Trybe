const myFizzBuzz = require('./myFizzBuzz')

test('returne as expected when multiple 3 nand 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
});


test('returne as expected when multiple 3 nand 5', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
});


test('returne as expected when multiple 3 nand 5', () => {
    expect(myFizzBuzz(20)).toBe('buzz');
});

test('returne as expected when multiple 3 nand 5', () => {
    expect(myFizzBuzz(17)).toBe(17);
});


test('returne as expected when multiple 3 nand 5', () => {
    expect(myFizzBuzz('17')).toBe(false);
});