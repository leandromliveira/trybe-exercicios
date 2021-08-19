let states = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO",];
let select = document.querySelector('#state');
let sendButton = document.querySelector('#send-button')

for (let index = 0; index < states.length; index += 1) {
  let state = states[index];
  let option = document.createElement('option');
  option.value = state;
  option.innerText = state;
  select.appendChild(option); 
}

sendButton.addEventListener('click', (event) => {
  event.preventDefault();
})