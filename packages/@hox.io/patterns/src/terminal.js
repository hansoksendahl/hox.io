const expressions = new WeakMap();

class Terminal {
  get token() {
    return expressions.get(this);
  }

  constructor(expression, isLR) {
    const expressionBody = `${expression}`.slice(1, -1);
    const augmentedExpression = isLR
      ? new RegExp(`^(${expressionBody})`)
      : new RegExp(`(${expressionBody})$`);
    
    expressions.set(this, augmentedExpression);
  }

  [Symbol.match](stream) {
    return stream.match(this.token);
  }
}