function adicao (a, b) {
  return a + b;
}
function subtracao (a, b) {
  return a - b;
}
function multiplicacao (a, b) {
  return a * b;
}
function divisao (a, b) {
  return a / b;
}
function resto (a, b) {
  return a % b;
}

function higherNumber (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

function highestNumber (a, b, c) {
  if (a > b) {
    if (a > c) {
      return a;
    } 
    else {
      return c;
    }
  }
  else 
    if (b > c) {
      return b;
    } else {
      return c;
    }
}

function signal (a) {
  if (a > 0) {
    return 'positive';
  }
  else 
    if (a < 0) {
      return 'negative';
    }
    else {
      return 'zere';
    }
}

function isTriangle(a, b, c) {
  if (a > 180 || a < 0) {
    return `o angulo ${a} é invalido`
  }
  if (b > 180 || b < 0) {
    return `o angulo ${b} é invalido`
  }
  if (c > 180 || c < 0) {
    return `o angulo ${c} é invalido`
  }
  if (a + b + c === 180 ) {
    return true;
  }
  else {
    return false;
  }
}

function chessMoviment(string) {
  string.toLowerCase();
  switch (string) {
    case 'bishop':
      return 'diagonals';
    case 'queen':
      return 'all de cum';
    case 'pawn':
      return 'one to front';
    case 'rook':
      return 'straight';
    case 'knight':
      return 'L moviment';
    case 'king':
      return 'one case for all sides';
    default:
      return 'essa não é uma peça válida';
  }
}

function noteConversion(numericalNote) {
  if (numericalNote > 90) {
    return 'A';
  }
  else if (numericalNote > 80) {
    return 'B';
  }
  else if (numericalNote > 70) {
    return 'C';
  }
  else if (numericalNote > 60) {
    return 'D';
  }
  else if (numericalNote > 50) {
    return 'E';
  } else {
    return 'F';
  }
}

function allOdd(a,b,c) {
  if (a % 2 === 1 && b % 2 === 1 && c % 2 === 1 ) {
    return true;
  }
  else {
    return false;
  }
}

function atLeastOneOdd(a,b,c) {
  if (a % 2 === 1 || b % 2 === 1 || c % 2 === 1 ) {
    return true;
  }
  else {
    return false;
  }
}

function profit(cost, sale) {
  if( cost < 0 || sale < 0) {
    return 'preencha valores acima de zero';
  }
  if( sale > (1.2*cost)) {
    return `o lucro foi de ${sale - 1.2*cost}`
  } else {
    return `o prejuizo foi de ${sale - 1.2*cost}`
  }
}

function netSalary(grossSalary) {
  let INSS = 0;
  let IR = 0;
  if (grossSalary <= 1556.94) {
    INSS = grossSalary * 0.08;
  } else if (grossSalary <= 2594.92) {
    INSS = grossSalary * 0.09;
  } else if (grossSalary < 5189,82) {
    INSS = grossSalary * 0.11;
  } else {
    INSS = 570.88;
  }
  let IRSalary = grossSalary - INSS;
  
   if (IRSalary <= 2826.65) {
    IR = IRSalary * 0.075 - 142.80;
  } else if (IRSalary <= 3751.06) {
    IR = IRSalary * 0.15 - 354.8;
  } else if (IRSalary <= 4664.68) {
    IR = IRSalary * 0.225 -636.13;
  } else {
    IR = IRSalary * 0.275 - 869.36;
  }
  return grossSalary-INSS-IR;
}

console.log(netSalary(3000));