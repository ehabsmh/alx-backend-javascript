function calculateNumber(type, a, b) {
  const n1Rounded = Math.round(a);
  const n2Rounded = Math.round(b);
  let result = 0;

  switch (type) {
    case 'SUM':
      result = n1Rounded + n2Rounded;
      break;
    case 'SUBTRACT':
      result = n1Rounded - n2Rounded;
      break;
    case 'DIVIDE':
      if (n2Rounded === 0) return "Error"
      result = n1Rounded / n2Rounded;
      break;
    default:
      break;
  }

  return result;
}

module.exports = calculateNumber;
