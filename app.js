'use strict';

var userPoints = 0;

console.log('hello there');
alert('welcome to my guessing game!');

var user = prompt('New phone who dis? \(what is your name?\) ');
alert(' hi ' + user + ' ! Yay! Ok here we go let\'s do this! ');

function answerOne () {
var answer = prompt(' is Cody\s favorite movie The Princess Bride? Type yes or no. ').toLowerCase();
console.log('princess bride ' + answer);

if(answer === 'yes' || answer === 'y' ) {
  userPoints++;
  alert( ' inconceivable! Goodnight, ' + user + '. Good work. Sleep well. I\'ll most likely kill you in the morning. well done! ');
}else {
  alert(' Sorry! My name is Inigo Montoya, you killed my father, prepare to die! ' + user + ' that movie is the best!');
}

alert(' you have ' + userPoints + ' points. ');
console.log(userPoints + ' Points');
}
answerOne();

function answerTwo() {
var answer2 = prompt(' Is cody\'s favorite show Doctor Who? Type yes or no. ').toLowerCase();
console.log('the doctor ' + answer2);

if(answer2 === 'yes' || answer2 === 'y' ) {
  userPoints++;
  alert( user + ' Yes!  In 900 years of time and space, I’ve never met anyone who wasn’t important! ' );
}else{
  alert(' Sorry this is a great quote though, ' + user + ' When you wake up I\'ll be a story in your head. But that\'s okay. We\'re all stories, in the end just make it a good one, eh? Because it was. It was the best.');
}

alert(' you have ' + userPoints + ' points. ');
console.log(userPoints + ' Points');
}
answerTwo();


// if(userPoints > '2');
// alert('Look at you go!');

function answerThree() {
var answer3 = prompt(' Has cody been out of the country? Type yes or no. ').toLowerCase();
console.log('country ' + answer3);

if(answer3 === 'no' || answer3 === 'n'){
  userPoints++;
  alert( ' Sadly ' + user + ' I have not been out of the country but soon! ');
}else{
  alert(' sorry but i\'ve never left the country ' + user + ' though im saving up to go to iceland! ');
}

alert(' you have ' + userPoints + ' points. ');
console.log(userPoints + ' Points');
}
answerThree();

var answer4 = prompt( ' Does Cody love to sing karaoke? Type yes or no. ').toLowerCase();
console.log(' karaoke ' + answer4);

if(answer4 === 'yes' || answer4 === 'y'){
  userPoints++;
  alert(' Yes!  Wake up ' + user + ' I think i got something to say to you! It\'s late september and i really should be back at school!');
}else{
  alert( user + ' Is it too late now to say sorry?      Because you got it wrong.  Sorry!   ');
}
alert(' you have ' + userPoints + ' points. ');
console.log(userPoints + ' Points');

var answer5 = prompt( ' Does Cody know spanish? Type yes or no. ').toLowerCase();
console.log('speaks spanish? ' + answer5);

if(answer5 === 'no' || answer5 === 'n'){
  alert('Sadly! i took 3 years of it so i should maybe after i finish school here i will re learn it. ' + user + ' But you got this right so theres that!  ');
  userPoints += 1;
}else{
  alert(' Nope, unfourtunately not ' + user + '.');
}
alert(' you have ' + userPoints + ' points. ');
console.log(userPoints + ' Points');

var turns = 5;

while (turns > 0) {
  var answer6 = prompt(user + ' Can you guess how old I am? answer with a number between 1 - 50. ');
  console.log(' guess age ');
  if (answer6 < 28) {
    alert( 'too small');
    turns = turns - 1;
    // turns = 0;

  }else if (answer6 > 28 ) {
    alert ('too big!');
    turns = turns - 1;
  }
  else {
    alert ('that is exactly right!');
    userPoints += 1;
    break;
  }
}

alert( user + ' you have ' + userPoints + ' Points! ');
console.log(userPoints + ' Points ');

var correctAnswers = ['homebrewing','cooking','fantasy football','video games','sports'];
var guesses = 5;
var flag = false;
var answer7 = prompt('What are cody\'s hobbies?');

while (!flag && guesses > 0) {

  for (var i = 0; i < correctAnswers.length; i++) {
    if (answer7 === correctAnswers[i]) {
      flag = true;
    }
  }
  if(flag === true) {
    userPoints++;
    alert(' correct ' + user + ' you have ' + userPoints + ' Points! ');
    console.log(answer7);
  } else {
    answer7 = prompt('give it another try');
    guesses--;
    console.log(answer7);

  }
}
alert('all the thing i like to do are ' + correctAnswers);
alert( user + ' you have ' + userPoints + ' Points! ');
console.log(userPoints + ' Points ');
