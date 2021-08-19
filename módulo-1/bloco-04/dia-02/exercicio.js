let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function percorre (numeros) {
  let element=[];
  for (let index = 0; index < numeros.length; index++) {
    element[index] = numeros[index];
  }
  return element;
}

function soma (numeros) {
  let soma=0;
  for (let index = 0; index < numeros.length; index++) {
    soma += numeros[index];
  }
  return soma;
}

function media (numeros) {
  let soma=0;
  for (let index = 0; index < numeros.length; index++) {
    soma += numeros[index];
  }
  return soma/numeros.length;
}

function media2 (numeros) {
  let soma=0;
  for (let index = 0; index < numeros.length; index++) {
    soma += numeros[index];
  }
  if (soma/numeros.length > 20 ) {
    return 'valor maior que 20'
  } else {
    return 'valor menor que 20'
  };
}

function maior (numeros) {
  let referencia = -100;
  for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] > referencia) {
      referencia = numeros [index]
    }
  }
  return referencia;
}

function odds (numeros) {
  let contador = 0;
  for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] % 2 === 1 ) {
      contador += 1;
    } 
  }
  if (contador === 0) {
    return 'nenhum valor ímpar encontrado'
  } else {
    return `${contador} numeros impares encontrados`
  }
}

function menor (numeros) {
  let referencia = 100;
  for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] < referencia) {
      referencia = numeros [index]
    }
  }
  return referencia;
}

function percorre2 () {
  let element=[];
  for (let index = 0; index < 25; index++) {
    element[index] = index + 1;
  }
  return element;
}

function percorreDividido () {
  let element=[];
  for (let index = 0; index < 25; index++) {
    element[index] = (index + 1)/2;
  }
  return element;
}

function bubble_sort (vector, interactions) {
  let aux = 0;
    for (let k = 1; k < interactions; k += 1) {
      for (let j = 0; j < interactions; j+=1) {
        if (vector[j] > vector[j+1]) {
          aux = vector[j];
          vector[j] = vector[j+1];
          vector[j+1] = aux;
        }
      }
    }
    return vector;
}

function invertBubble_sort (vector, interactions) {
  let aux = 0;
    for (let k = 1; k < interactions; k += 1) {
      for (let j = 0; j < interactions; j+=1) {
        if (vector[j] < vector[j+1]) {
          aux = vector[j];
          vector[j] = vector[j+1];
          vector[j+1] = aux;
        }
      }
    }
    return vector;
}

function multiply (numeros) {
  let resultado = [];
  for (let index = 0; index < numeros.length; index++) {
    if (index === numeros.length - 1) {
      resultado[index] = numeros[index]*2;
    } else {
      resultado[index] = numeros[index]*numeros[index+1];
    }
  }
  return resultado;
}


console.log(multiply(numbers));