const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso? 
*/
secondLi.addEventListener('click', addTechClass);
firstLi.addEventListener('click', addTechClass);
thirdLi.addEventListener('click', addTechClass);

function addTechClass(event) {
 let check = document.querySelector('.tech');
 check.classList.remove('tech');
 event.target.classList.add('tech');
}

/*
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
*/

input.addEventListener('input', function(event) {
  let techElement = document.querySelector('.tech');
  techElement.innerText = event.target.value;
});
/*
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
*/
myWebpage.addEventListener('dblclick', function() {
  window.location.replace('https://leandromliveira.github.io');
})
/*
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo
*/
myWebpage.addEventListener('mouseover', function(event) {
  event.target.style.color = 'yellow';
});

myWebpage.addEventListener('mouseout', function(event) {
  event.target.style.color = 'white';
})


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.