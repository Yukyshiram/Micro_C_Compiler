function generate(node) {
  switch (node.type) {
    case 'Program':
      return node.body.map(generate).join('\n');

    case 'VariableDeclaration':
      return `let ${node.name} = ${generate(node.value)};`;

    case 'BinaryExpression':
      return `${generate(node.left)} ${node.operator} ${generate(node.right)}`;

    case 'Literal':
      return node.value.toString();

    case 'Identifier':
      return node.name;

    default:
      throw new Error(`Unknown node type: ${node.type}`);
  }
}

module.exports = { generate };
