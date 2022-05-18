const sum = require('./sum')

test(`test sum of two`, () => {
    expect(sum(4, 5)).toBe(9);
});

test(`sum of two zeros returns zero`, () => {
    expect(sum(0, 0)).toBe(0);
});

test(`throw error on string`, () => {
    expect(() => {sum()}).toThrow();
});


test('error message', () => {
    expect(() => {sum()}).toThrowError(new Error('parameters must be numbers'));
});