const { tokenize } = require('./lexer');
const { parse } = require('./parser');

const code = `
int a = 5;
int b = 10;
int c = a + b;
`;

const tokens = tokenize(code);
const ast = parse(tokens);

console.dir(ast, { depth: null });
