'use strict';

var userPoints = 0;

console.log('hello there');
alert('welcome to my guessing game!');

var user = prompt(' what is your name? ');
alert(' hi ' + user + ' ! I am so glad you want to play my game. ');

var answer = prompt(' is Cody\s favorite movie The Princess Bride? Type yes or no. ').toLowerCase();
console.log(answer);

if(answer === 'yes' || answer === 'Y' ) {
  userPoints++;
  alert( ' inconceivable! Goodnight, ' + user + '. Good work. Sleep well. I\'ll most likely kill you in the morning. ');
}else {
  alert(' My name is Inigo Montoya, you killed my father, prepare to die! ' + user + ' that movie is the best!');
}

alert(' you have ' + userPoints + ' points. ');
