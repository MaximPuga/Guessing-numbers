'use strict';
let highScore = 0;
let score = 20;
let secretNumber = Math.trunc(Math.random()*20) +1;
const eventHendler = function() {
   const guessingNumber = Number(document.querySelector('.guess').value);
   console.log(guessingNumber);

//No input
   if(!guessingNumber) {
   document.querySelector('.start').textContent = 'Input some number';

//Player won
   }else if( guessingNumber === secretNumber){
    document.querySelector('.start').textContent = 'Right';
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    if(score > highScore) {
      highScore = score;
      document.querySelector('.try').textContent = highScore;
    }
//Too high
   }else if(guessingNumber > secretNumber){
      if(score > 1) {
         document.querySelector('.start').textContent = 'Too big';
         score--
         document.querySelector('.points').textContent =  `Points: ${score}`;
      }else{
         document.querySelector('.start').textContent = 'Game Over';
         document.querySelector('.question').textContent = secretNumber;
         document.querySelector('body').style.backgroundColor = 'red';
         document.querySelector('.points').textContent = 0;
      }

//Too low
   }else if(guessingNumber < secretNumber){
      if(score > 1) {
         document.querySelector('.start').textContent = 'Too small';
         score--
         document.querySelector('.points').textContent =  `Points: ${score}`;
      }else{
         document.querySelector('.start').textContent = 'Game Over';
         document.querySelector('.question').textContent = secretNumber;
         document.querySelector('body').style.backgroundColor = 'red';
         document.querySelector('.points').textContent = 0;
      }
   }
};
const restartGuessing = function() {
   secretNumber = Math.trunc(Math.random()*20) +1;
   score = 20;
   document.querySelector('.question').textContent = '???';
   document.querySelector('.start').textContent = 'Start guessing';
   document.querySelector('.points').textContent = `Points: ${score}`;
   document.querySelector('.guess').value = '';
   document.querySelector('body').style.backgroundColor = 'black';
   };
document.querySelector('.checker').addEventListener('click', eventHendler);
document.querySelector('.btnAgain').addEventListener('click', restartGuessing);