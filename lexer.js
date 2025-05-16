function tokenize(input) {
  const tokens = [];
  const tokenRegex = /\s*(int|[a-zA-Z_]\w*|\d+|[=;+\-*/])\s*/g;
  let match;

  while ((match = tokenRegex.exec(input)) !== null) {
    tokens.push(match[1]);
  }

  return tokens;
}

module.exports = { tokenize };