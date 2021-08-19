let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

// parte 1
// exercicio 1
function welcome(info) {
  return `bem-vinda, ${info.personagem}`
}

// exercicio 2
function addRecorrente(info) {
  info.recorrente = 'Sim';
  return info;
}

// exercicio 3
function forIn(info) {
  let resultado='';
  info.recorrente = 'Sim';
  for (let index in info) {
    resultado += index + '\n';
  }
  return resultado;
}

// exercicio 4
function forIn2(info) {
  let resultado='';
  info.recorrente = 'Sim';
  for (let index in info) {
    resultado += info[index] + '\n';
  }
  return resultado;
}

// exercicio 5
function both(info, info2) {
  let resultado='';
  info.recorrente = 'Sim';
  for (let index in info2) {
    if (info.recorrente&&info2.recorrente&&index==='recorrente') {
      resultado += 'Ambos recorrentes'
    } else {
      resultado += info[index] + ' e ' + info2[index] + '\n';
    }
  }
  return resultado;
}

// parte 2
// exercicio 1
function IsPalindrome (string) {
  let array = string.split('');
  array.reverse()
  let teste = array.join('');
  if (teste === string ) {
    return true;
  } else {
    return false;
  }
}

// exercicio 2
function whichIsBigger (array) {
  let comparador = array[0];
  let posicao = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index]> comparador) {
      comparador = array[index];
      posicao = index;
    }
  }
  return posicao;
}

// exercicio 3
function whichIsSmaller (array) {
  let comparador = array[0];
  let posicao = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] < comparador) {
      comparador = array[index];
      posicao = index;
    }
  }
  return posicao;
}

// exercicio 4
function moreCaracteres (array) {
  let resultado = '';
  let comparador = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > comparador) {
      comparador = array[index].length;
      resultado = array[index];
    }
  }
  return resultado;
}

// exercicio 5
function moreRepeats (array) {
  let contadorNumeros = {};
  for (let index = 0; index < array.length; index += 1) {
    let number = array[index];
    if(!contadorNumeros[number]) {
      contadorNumeros[number] = 0; 
    }
    contadorNumeros[number] += 1;
  }

  let comparador = 0;
  let numeroMaisRepetido = -200;
  for (number in contadorNumeros) {
   if (contadorNumeros[number]> comparador) {
     comparador = contadorNumeros[number];
     numeroMaisRepetido = number;
   }
  }
  return numeroMaisRepetido; 
}

// exercicio 6
function summation (n) {
  let resultado = 0;
  for (let i = 0; i <= n; i += 1) {
    resultado += i;
  }
  return resultado;
}

// exercicio 7
function writeEnding (word, ending) {
  let resultado = true;
  for (let index = 0; index < ending.length; index += 1) {
    if (word[word.length-ending.length] === ending[index]) {
      resultado && true;
    } else {
      resultado && false;
    }
  }
  return resultado;
}

//bonus 1
function converter (romanNumber) {
  let resultado = 0;
  for (let index = 0; index < romanNumber.length; index += 1) {
    if (romanNumber[index] === 'I' && (romanNumber[index + 1] === undefined || romanNumber[index + 1] === 'I')) {
      resultado += 1;
    } else if (romanNumber[index] === 'I') {
      resultado -= 1;
    }
    if (romanNumber[index] === 'V') {
      resultado += 5;
    }
    if (romanNumber[index] === 'L') {
      resultado += 50;
    }
    if (romanNumber[index] === 'D') {
      resultado += 500;
    }
    if (romanNumber[index] === 'M') {
      resultado += 1000;
    }
    if (romanNumber[index] === 'X' && (romanNumber[index + 1] === undefined || romanNumber[index + 1] === 'I' || romanNumber[index + 1] === 'V' || romanNumber[index + 1] === 'X')) {
      resultado += 10;
    } else if (romanNumber[index] === 'X') {
      resultado -= 10;
    }
    if (romanNumber[index] === 'C' && (romanNumber[index + 1] === undefined || romanNumber[index + 1] === 'I' || romanNumber[index + 1] === 'V' || romanNumber[index + 1] === 'X' || romanNumber[index + 1] === 'L' || romanNumber[index + 1] === 'C')) {
      resultado += 100;
    } else if (romanNumber[index] === 'C') {
      resultado -= 100;
    }
  }
  return resultado
}

//bonus 2
function arrayOfNumbers (vector) {
  let evenNumbers = [];
  for (let index = 0; index < vector.length; index += 1) {
    let miniVector = vector[index];
    for (let index = 0; index < miniVector.length; index++) {
      if (miniVector[index] % 2 === 0 ) {
        evenNumbers.push(miniVector[index]);
      }
    }
  }
  return evenNumbers;
}

//bonus 3
function CountFruits(basket) {
  let fruits = [];
  for (let index = 0; index < basket.length; index += 1) {
    let fruit = basket[index];
    if(!fruits[fruit]) {
      fruits[fruit] = 0;
    }
    fruits[fruit] += 1;
  }

  const summaries = [];
  for (fruit in fruits) {
    let message = `${fruits[fruit]} ${fruit}`;
    if (fruits[fruit] > 1) message += 's';
    summaries.push(message)
  }
  return `Sua cesta possui: ${summaries.join(', ')}.`;
}

