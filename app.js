'use strict';

var userPoints = 0;

console.log('hello yawll');
alert('welcome to my guessing game!');

var user = prompt('what is your name?');
alert('hi' + user + ' ! I am so glad you want to play my game. ');

var answer = prompt(' is Rachel\s favorite food kimchi? Type yes or no. ').tolowercase();
console.log(answer);

if(answer === 'yes' || answer === 'Y' ) {
  userPoints++;
}else {
  alert('wrong! actually i like all spicy foods.');
}

alert('you have' + userPoints + 'points. ');
