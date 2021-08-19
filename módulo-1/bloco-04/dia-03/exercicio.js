function square(n) {
  let resultado = '';
  for (let index = 0; index < n; index++) {
    for (let index2 = 0; index2 < n; index2++) {
      resultado += '*';
      
    }
    resultado += '\n';
  }
  return resultado;
}

function rightTriangle(n) {
  let resultado = '';
  for (let index = 0; index < n; index++) {
    for (let index2 = 0; index2 < index+1; index2++) {
      resultado += '*';
      
    }
    resultado += '\n';
  }
  return resultado;
}

function invertRightTriangle(n) {
  let resultado = '';
  for (let index = 0; index < n; index++) {
    for (let index2 = 0; index2 < n; index2++) {
      if (index2 >= n - index -1) {
        resultado += '*';
      }
      else {
        resultado += ' ';
      }
    }
    resultado += '\n';
  }
  return resultado;
}

function pyramid(n) {
  let linha = '';
  for (let qtdeAsterisco =1; qtdeAsterisco <= n; qtdeAsterisco += 2) {
    let qtdeEspacosLadoLinha = (n-qtdeAsterisco)/2;
    for( let qtdeEspacoEsq = 0; qtdeEspacoEsq < qtdeEspacosLadoLinha; qtdeEspacoEsq += 1) {
      linha += ' ';
    }
    for (let qtdeCaracteres = 0; qtdeCaracteres < qtdeAsterisco; qtdeCaracteres += 1) {
      linha += '*';
    }
    for( let qtdeEspacoDir = 0; qtdeEspacoDir < qtdeEspacosLadoLinha; qtdeEspacoDir += 1) {
      linha += ' ';
    }
    linha += '\n';
  }
  return linha;
}

console.log(pyramid(5));

function emptyPyramid(n) {
  let resultado = '';
  for (let index = 0; index < n; index++) {
    for (let index2 = 0; index2 < n; index2++) {
      if (index === n-1 || (index === index2 && index2 > (n-1)/2 -1 ) || index === (n - index2 -1) && index2 < (n-1)/2 +1)  {
        resultado += '*';
      }
      else {
        resultado += ' ';
      }
    }
    resultado += '\n';
  }
  return resultado;
}

function isPrime(n) {
  if (n < 2) {
    return `o número ${n} não é primo`;
  } else {
    let contador = 0;
    for (let index = 0; index < n/2 + 1 ; index++) {
      if (n % index === 0 ) {
        contador +=1
      }
    }
    if (contador > 1) {
      return `o número ${n} não é primo`;
    } else {
      return `o núemro ${n} é primo`;
    }
  }
}
