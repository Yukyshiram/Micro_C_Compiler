const { tokenize } = require('./lexer');

const code = `
int a = 5;
int b = 10;
int c = a + b;
`;

console.log(tokenize(code));
