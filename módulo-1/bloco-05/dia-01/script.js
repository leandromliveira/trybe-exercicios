/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. 
 (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

 //exercicio 1
 document.getElementsByTagName('p')[1].innerHTML='vamo, que vamo';

 //exercicio 2
 document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109';

 //exercicio 3
 document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';

 //exercicio 4
 document.getElementsByTagName('h1')[0].innerHTML='Exercício 5.1 - JavaScript';

 //exercicio 5
 element = document.getElementsByTagName('p');
 for (let index = 0; index < element.length; index += 1) {
   element[index].style.textTransform = 'uppercase';
 }

 //exercicio 6
 element = document.getElementsByTagName('p');
 for (let index = 0; index < element.length; index += 1) {
   console.log(element[index]);
 }