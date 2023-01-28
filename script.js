'use strict';
let highScore = 0;
let score = 20;
let secretNumber = Math.trunc(Math.random()*20) +1;
let input = document.querySelector(".guess");
function eventHendler() {
   const guessingNumber = Number(document.querySelector('.guess').value);
   console.log(guessingNumber);
   document.querySelector('.guess').value = '';

//No input and incorrect value
   if(!guessingNumber) {
   document.querySelector('.start').textContent = 'Input some number';
   }else if(guessingNumber < 0){
      document.querySelector('.start').textContent = 'Input correct number'
   }else if(guessingNumber > 20){
      document.querySelector('.start').textContent = 'Input correct number'
//Player won
   }else if( guessingNumber === secretNumber){
    document.querySelector('.start').textContent = 'Right';
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    if(score > highScore) {
      highScore = score;
      document.querySelector('.try').textContent = `Best score: ${highScore}`;
    }
//Number from input is wrong
   }else if(guessingNumber !== secretNumber){
      if(score > 1) {
         document.querySelector('.start').textContent = guessingNumber > secretNumber ? 'Too big' : 'Too small';
         score--
         document.querySelector('.points').textContent =  `Points: ${score}`;
         document.querySelector('.try').textContent = `Best score: ${highScore}`;
      }else{
         document.querySelector('.start').textContent = 'Game Over';
         document.querySelector('.question').textContent = secretNumber;
         document.querySelector('body').style.backgroundColor = 'red';
         document.querySelector('.points').textContent = 0;
      }   if(guessingNumber < 0){
      document.querySelector('.start').textContent = 'Input correct number'
   };
   }
};
function restartGuessing() {
   secretNumber = Math.trunc(Math.random()*20) +1;
   score = 20;
   document.querySelector('.question').textContent = '???';
   document.querySelector('.start').textContent = 'Start guessing';
   document.querySelector('.points').textContent = `Points: ${score}`;
   document.querySelector('.guess').value = '';
   document.querySelector('body').style.backgroundColor = 'black';
   };
document.querySelector('.btnAgain').addEventListener('click', restartGuessing);

//For button use
document.querySelector(".checker").addEventListener('click', eventHendler);

document.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".checker").addEventListener('click', eventHendler);
    eventHendler();
  }
});

//For rules
let modalWindow = document.querySelector('.modal-window');
let overlay = document.querySelector('.overlay');

let btnCloseModalWindow = document.querySelector('.close-modal-window');
let btnsShowModalWindow = document.querySelectorAll('.show-modal-window');

function closeModalWindow() {
   modalWindow.classList.add('hidden');
   overlay.classList.add('hidden');
};

function showModalWindow() {
   modalWindow.classList.remove('hidden');
   overlay.classList.remove('hidden');
};

for(let i = 0; i < btnsShowModalWindow.length; i++) {
btnsShowModalWindow[i].addEventListener('click', showModalWindow);
};

btnCloseModalWindow.addEventListener('click', closeModalWindow);

overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function(event) {

   if (event.key === 'Escape' &&!modalWindow.classList.contains('hidden')) {
         closeModalWindow();
   }
});