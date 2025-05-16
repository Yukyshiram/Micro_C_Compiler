function parse(tokens) {
  const ast = {
    type: 'Program',
    body: [],
  };

  let i = 0;

  function eat(expected) {
    const token = tokens[i];
    if (token !== expected) {
      throw new Error(`Expected "${expected}", got "${token}"`);
    }
    i++;
  }

  function isIdentifier(token) {
    return /^[a-zA-Z_]\w*$/.test(token) && token !== 'int';
  }

  function isNumber(token) {
    return /^\d+$/.test(token);
  }

  function parseDeclaration() {
    eat('int');
    const name = tokens[i++];
    eat('=');
    const expr = parseExpression();
    eat(';');
    return {
      type: 'VariableDeclaration',
      name,
      value: expr,
    };
  }

  function parseExpression() {
    let left = parsePrimary();

    while (['+', '-', '*', '/'].includes(tokens[i])) {
      const operator = tokens[i++];
      const right = parsePrimary();
      left = {
        type: 'BinaryExpression',
        operator,
        left,
        right,
      };
    }

    return left;
  }

  function parsePrimary() {
    const token = tokens[i++];
    if (isNumber(token)) {
      return { type: 'Literal', value: Number(token) };
    } else if (isIdentifier(token)) {
      return { type: 'Identifier', name: token };
    } else {
      throw new Error(`Unexpected token: ${token}`);
    }
  }

  while (i < tokens.length) {
    ast.body.push(parseDeclaration());
  }

  return ast;
}

module.exports = { parse };
