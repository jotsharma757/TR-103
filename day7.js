function calculate(num1, operator, num2) {
  const a = parseFloat(num1);
  const b = parseFloat(num2);

  if (isNaN(a) || isNaN(b)) {
    return 'Error: Invalid numbers';
  }

  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
    case '×':
      return a * b;
    case '/':
    case '÷':
      return b !== 0 ? a / b : 'Error: Division by zero';
    default:
      return 'Error: Unknown operator';
  }
}

// Example usage:
console.log(calculate(10, '+', 5));  // 15
console.log(calculate(10, '/', 0));  // Error: Division by zero
