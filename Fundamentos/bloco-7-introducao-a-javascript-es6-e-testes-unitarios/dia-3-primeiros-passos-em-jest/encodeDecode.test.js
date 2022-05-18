const { encode, decode } = require("./encodeDecode")


test('verify if it is a function', () => {
    expect(typeof encode).toBe('function')
});

test('verify if it is a function', () => {
    expect(typeof decode).toBe('function')
});


test('verify if the vogals will turn in to numbers', () => {
    expect(encode('a','e', 'i', 'o', 'u')).toBe('1', '2', '3', '4', '5')
});


test('verify if the numbers will turn in to vogals', () => {
    expect(decode('1', '2', '3', '4', '5')).toBe('a', 'e', 'i', 'o', 'u')
});


test('verify if others letters will be converted', () => {
    expect(encode('laka')).toBe('l1k1');
    expect(encode('bece')).toBe('b2c2');
    expect(encode('gini')).toBe('g3n3');
    expect(encode('vovo')).toBe('v4v4');
    expect(encode('mutu')).toBe('m5t5')
});

test('verify if others numbers will be converted', () => {
    expect(decode('0123456789')).toBe('0aeiou6789');
    
});

test('verify returned string has the same length to te parameter', () => {
    expect(encode('abobora').length).toBe(('1b4b4r1').length);
})


test('verify returned string has the same length to te parameter', () => {
    expect(decode('54321').length).toBe(('uoiea').length);
})