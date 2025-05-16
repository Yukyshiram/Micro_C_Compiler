const fs = require('fs');
const path = require('path');

const { tokenize } = require('./lexer');
const { parse } = require('./parser');
const { generate } = require('./generator');

const filePath = path.join(__dirname, 'example.c');
const code = fs.readFileSync(filePath, 'utf-8');

const tokens = tokenize(code);
const ast = parse(tokens);
const output = generate(ast);

console.log('📜 Código JS generado:\n');
console.log(output);
