let backgroundColor = 'black';
let colorText = 'green';
let fontSize = '24px';
let lineHeight = '1.5';
let fontFamily = 'Arial';

localStorage.setItem('backgroundColor', backgroundColor);
localStorage.setItem('colorText', colorText);
localStorage.setItem('fontSize', fontSize);
localStorage.setItem('lineHeight', lineHeight);
localStorage.setItem('fontFamily', fontFamily);

let body = document.getElementsByTagName('body')[0]
body.style.backgroundColor = localStorage.getItem('backgroundColor');
body.style.color = localStorage.getItem('colorText');
body.style.fontSize = localStorage.getItem('fontSize');
body.style.lineHeight = localStorage.getItem('lineHeight');
body.style.fontFamily = localStorage.getItem('fontFamily');