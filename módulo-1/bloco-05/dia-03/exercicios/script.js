function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();


// Escreva seu código abaixo.
// Exercício 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
function createDaysOfMonth(monthDaysList) {
  const days = document.querySelector('#days');
  for (let index = 0; index < monthDaysList.length; index += 1) {
    let day = document.createElement('li');
    day.innerText = monthDaysList[index];
    day.classList.add('day');
    days.appendChild(day);
    if (monthDaysList[index] === 25) {
      day.classList.add('holiday');
    }
  }
}

createDaysOfMonth(dezDaysList);

// Exercício 2

function createHolidays(feriados) {
  let buttonsContainer = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.id = "btn-holiday";
  button.innerText = feriados;
  buttonsContainer.appendChild(button);
}

createHolidays('feriados');

// Exercício 3
let holidayButton =  document.querySelector('#btn-holiday');

holidayButton.addEventListener('click', handleHolidayButton);

function handleHolidayButton() {
  let holidayDays = document.getElementsByClassName('holiday');
    for (let index = 0; index < holidayDays.length; index += 1) {
      if (holidayDays[index].style.backgroundColor === 'yellow') {
        holidayDays[index].style.backgroundColor = 'rgb(238,238,238)'
      } else {
        holidayDays[index].style.backgroundColor = 'yellow';
      }
    }
}

// Exercício 4
function createFridayButton(string) {
  let buttonsContainer = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.id = "btn-friday";
  button.innerText = string;
  buttonsContainer.appendChild(button);
}

createFridayButton('Sexta-feira');

// Exercício 5
let fridayButton = document.querySelector('#btn-friday');

fridayButton.addEventListener('click', handleFridayButton);

function handleFridayButton() {
  let days = document.getElementsByClassName('day');
    for (let index = 0; index < days.length; index += 1) {
      if (parseInt(days[index].innerText) % 7 === 4 && days[index].style.backgroundColor === 'white') {
        days[index].style.backgroundColor = 'rgb(238,238,238)'
      } else if(parseInt(days[index].innerText) % 7 === 4) {
        days[index].style.backgroundColor = 'white';
      }
    }
}

// Exercício 6
let days = document.querySelector('#days');

days.addEventListener('mouseover', zoomIn);
days.addEventListener('mouseout', zoomOut);

function zoomIn(event) {
  event.target.style.fontSize = '50px';
  event.target.style.fontWeight = '600';
}

function zoomOut(event) {
  event.target.style.fontSize = '24px';
  event.target.style.fontWeight = '500';
}

// Exercício 7
function createTask(string) {
  let myTasks = document.querySelector('.my-tasks');
  let span = document.createElement('span');
  span.innerText = string;
  myTasks.appendChild(span);
}

createTask('cozinhar');

// Exercício 8
function createTaskDescription(string) {
  let myTasks = document.querySelector('.my-tasks');
  let description = document.createElement('div');
  description.innerText = '';
  description.style.backgroundColor = string;
  myTasks.appendChild(description);
}

createTaskDescription('pink');

// Exercício 9
let selected = document.querySelector('.my-tasks');

selected.addEventListener('click', selected)

function selected (event) {
  if (event.target.)
  event.target.classList.add('selected');

}