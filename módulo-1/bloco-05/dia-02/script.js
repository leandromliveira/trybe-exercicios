// exercicio 1
let body = document.querySelector('body');
let h1Item = document.createElement('h1');
h1Item.innerHTML = 'helloWorld';
body.appendChild(h1Item);

// exercicio 2
let main = document.createElement('main');
main.className = 'main-content';
body.appendChild(main);

// exercicio 3
let sectionCenter = document.createElement('section');
sectionCenter.className = 'center-content';
main.appendChild(sectionCenter);

// exercicio 4
let text = document.createElement('p');
text.innerText = 'texto bem planejado';
sectionCenter.appendChild(text);

// exercicio 5
let sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';
main.appendChild(sectionLeft);

// exercicio 6
let sectionRight = document.createElement('section');
sectionRight.className = 'right-content';
main.appendChild(sectionRight);

// exercicio 7
let image = document.createElement('img');
image.src = 'https://picsum.photos/200 ';
image.className = 'small-image';
sectionLeft.appendChild(image);

// exercicio 8
let numbers = [
  'um',
  'dois',
  'tres',
  'quarto',
  'cinco',
  'seis',
  'sete',
  'oito',
  'nove',
  'dez'
]
let ul = document.createElement('ul');
ul.className = 'lista-nao-ordenada';
sectionRight.appendChild(ul);
for (let index = 0; index < numbers.length; index += 1) {
  let number = numbers[index];
  let numberListItem = document.createElement('li');
  numberListItem.innerText = number;
  numberListItem.className = 'number-list-item';
  ul.appendChild(numberListItem)
}

// exercicio 9
for (let index = 0; index < 3; index += 1) {
  let createH3 = document.createElement('h3');
  createH3.innerText = 'texto genérico';
  main.appendChild(createH3);
}

// parte 2
// exercicio 1
h1Item.className = 'title';

// exercicio 2
let h3Items = main.childNodes;
for (let index = 3; index < h3Items.length; index++) {
  h3Items[index].className = 'description';  
}

// exercicio 3
main.removeChild(sectionLeft);

// exercicio 4
sectionRight.style.marginRight = 'auto';

// exercicio 5
sectionCenter.style.backgroundColor = 'green';

// exercicio 6
let numberItems = document.querySelectorAll('.number-list-item');
for (let index = 8; index < numberItems.length; index += 1) {
  ul.removeChild(numberItems[index]);
}