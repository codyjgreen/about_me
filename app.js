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
  alert( ' inconceivable! Goodnight, ' + user + '. Good work. Sleep well. I\'ll most likely kill you in the morning. well done! ');
}else {
  alert(' Sorry! My name is Inigo Montoya, you killed my father, prepare to die! ' + user + ' that movie is the best!');
}

alert(' you have ' + userPoints + ' points. ');
console.log(userPoints + ' Points');

var answer2 = prompt(' Is cody\'s favorite show Doctor Who? Type yes or no. ').toLowerCase();
console.log(answer2);

if(answer2 === 'yes' || answer2 === 'Y' ) {
  userPoints++;
  alert( user + ' Yes!  In 900 years of time and space, I’ve never met anyone who wasn’t important! ' );
}else{
  alert(' Sorry this is a great quote though ' + user + ' When you wake up I\'ll be a story in your head. But that\'s okay. We\'re all stories, in the end just make it a good one, eh? Because it was. It was the best.');
}

alert(' you have ' + userPoints + ' points. ');
console.log(userPoints + ' Points');

if(userPoints > '2');
alert('Look at you go!');

var answer3 = prompt(' Has cody been out of the country? Type yes or no. ').toLowerCase();
console.log(answer3);

if(answer3 === 'no' || answer3 === 'N'){
  userPoints++;
  alert( ' Sadly ' + user + ' I have not been out of the country but soon! ');
}else{
  alert(' sorry but i\'ve never left the country ' + user + ' though im saving up to go to iceland! ');
}

alert(' you have ' + userPoints + ' points. ');
console.log(userPoints + ' Points');

var answer4 = prompt( ' Does Cody love to sing karaoke? Type yes or no. ').toLowerCase();
console.log(answer4);

if(answer4 === 'yes' || answer4 === 'Y'){
  userPoints++;
  alert(' Yes!  Wake up ' + user + ' I think i got something to say to you! It\s late september and i really should be back at school!');
}else{
  alert( user + 'Is it too late now to say sorry?      Because you got it wrong.  Sorry!   ');
}
alert(' you have ' + userPoints + ' points. ');
console.log(userPoints + ' Points');
