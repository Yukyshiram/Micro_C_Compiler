const { tokenize } = require('./lexer');
const { parse } = require('./parser');
const { generate } = require('./generator');

const code = `
int a = 5;
int b = 10;
int c = a + b;
`;

const tokens = tokenize(code);
const ast = parse(tokens);
const output = generate(ast);

console.log('📜 Código de salida en JS:\n');
console.log(output);