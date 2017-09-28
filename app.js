'use strict';

var userPoints = 0;

console.log('hello there');
alert('welcome to my guessing game!');

var user = prompt(' what is your name? ');
alert(' hi ' + user + ' ! Yay! Ok here we go let\s do this! ');

var answer = prompt(' is Cody\s favorite movie The Princess Bride? Type yes or no. ').toLowerCase();
console.log(answer);

if(answer === 'yes' || answer === 'Y' ) {
  userPoints++;
  alert( ' inconceivable! Goodnight, ' + user + '. Good work. Sleep well. I\'ll most likely kill you in the morning. ');
}else {
  alert(' My name is Inigo Montoya, you killed my father, prepare to die! ' + user + ' that movie is the best!');
}

alert(' you have ' + userPoints + ' points. ');
console.log(userPoints + ' Points');

var answer2 = prompt(' Is cody\'s favorite show Doctor Who? Type yes or no. ').toLowerCase();
console.log(answer2);

if(answer2 === 'yes' || answer2 === 'Y' ) {
  userPoints++;
  alert( user + ' In 900 years of time and space, I’ve never met anyone who wasn’t important! ' );
}else{
  alert(user + ' When you wake up I\'ll be a story in your head. But that\'s okay. We\'re all stories, in the end just make it a good one, eh? Because it was. It was the best.');
}

alert(' you have ' + userPoints + ' points. ');
console.log(userPoints + ' Points');
