const myRemove = require('./myRemove')

test('returned array', () => {
    expect(myRemove([1,2,3,4], 3)).toEqual([1,2,4], 3);
});

test('returned array', () => {
    expect(myRemove([1,2,3,4], 3)).not.toEqual([1,2,3,4]);
});


test('returned array', () => {
    expect(myRemove([1,2,3,4], 5)).toEqual([1,2,3,4]);
});

