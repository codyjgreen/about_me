'use strict';

var userPoints = 0;

console.log('hello there');
alert('welcome to my guessing game!');

var user = prompt(' what is your name? ');
alert(' hi ' + user + ' ! Yay! Ok here we go let\'s do this! ');
//
// var answer = prompt(' is Cody\s favorite movie The Princess Bride? Type yes or no. ').toLowerCase();
// console.log('princess bride ' + answer);
//
// if(answer === 'yes' || answer === 'y' ) {
//   userPoints++;
//   alert( ' inconceivable! Goodnight, ' + user + '. Good work. Sleep well. I\'ll most likely kill you in the morning. well done! ');
// }else {
//   alert(' Sorry! My name is Inigo Montoya, you killed my father, prepare to die! ' + user + ' that movie is the best!');
// }
//
// alert(' you have ' + userPoints + ' points. ');
// console.log(userPoints + ' Points');
//
// var answer2 = prompt(' Is cody\'s favorite show Doctor Who? Type yes or no. ').toLowerCase();
// console.log('the doctor ' + answer2);
//
// if(answer2 === 'yes' || answer2 === 'y' ) {
//   userPoints++;
//   alert( user + ' Yes!  In 900 years of time and space, I’ve never met anyone who wasn’t important! ' );
// }else{
//   alert(' Sorry this is a great quote though, ' + user + ' When you wake up I\'ll be a story in your head. But that\'s okay. We\'re all stories, in the end just make it a good one, eh? Because it was. It was the best.');
// }
//
// alert(' you have ' + userPoints + ' points. ');
// console.log(userPoints + ' Points');
//
// // if(userPoints > '2');
// // alert('Look at you go!');
//
// var answer3 = prompt(' Has cody been out of the country? Type yes or no. ').toLowerCase();
// console.log('country ' + answer3);
//
// if(answer3 === 'no' || answer3 === 'n'){
//   userPoints++;
//   alert( ' Sadly ' + user + ' I have not been out of the country but soon! ');
// }else{
//   alert(' sorry but i\'ve never left the country ' + user + ' though im saving up to go to iceland! ');
// }
//
// alert(' you have ' + userPoints + ' points. ');
// console.log(userPoints + ' Points');
//
// var answer4 = prompt( ' Does Cody love to sing karaoke? Type yes or no. ').toLowerCase();
// console.log(' karaoke ' + answer4);
//
// if(answer4 === 'yes' || answer4 === 'y'){
//   userPoints++;
//   alert(' Yes!  Wake up ' + user + ' I think i got something to say to you! It\'s late september and i really should be back at school!');
// }else{
//   alert( user + ' Is it too late now to say sorry?      Because you got it wrong.  Sorry!   ');
// }
// alert(' you have ' + userPoints + ' points. ');
// console.log(userPoints + ' Points');
//
// var answer5 = prompt( ' Does Cody know spanish? Type yes or no. ').toLowerCase();
// console.log('speaks spanish? ' + answer5);
//
// if(answer5 === 'no' || answer5 === 'n'){
//   alert('Sadly! i took 3 years of it so i should maybe after i finish school here i will re learn it. ' + user + ' But you got this right so theres that!  ');
//   userPoints += 1;
// }else{
//   alert(' Nope, unfourtunately not ' + user + '.');
// }
// alert(' you have ' + userPoints + ' points. ');
// console.log(userPoints + ' Points');
//
// var turns = 5;
//
// while (turns > 0) {
//   var answer6 = prompt(user + ' Can you guess how old I am? answer with a number between 1 - 50. ');
//   console.log(' guess age ');
//   if (answer6 < 28) {
//     alert( 'too small');
//     turns = turns - 1;
//     // turns = 0;
//
//   }else if (answer6 > 28 ) {
//     alert ('too big!');
//     turns = turns - 1;
//   }
//   else {
//     alert ('that is exactly right!');
//     userPoints += 1;
//     break;
//   }
// }
//
// alert( user + ' you have ' + userPoints + ' Points! ');
// console.log(userPoints + ' Points ');

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

// As a developer, I want to use thoughtful and descriptive console.log() throughout my code to help test my work and assist with debugging.
// As a developer, I want to convert some of my appropriate biographical elements into unordered lists, such as my education summary and/or my work experience.
// As a developer, I want to consider the user experience (UX) of my About Me and guessing game, trying to view it through the eyes of a user. Wait... maybe I should just write a user story for that...
// As an end user of the About Me and guessing game, I want to have an informative, interesting, and fun experience in learning about the developer.
// As a prospective job seeker, I want to consider adopting additional features that I have seen in the 'About Me' projects made by others, so that my 'About Me' can become more thorough and interesting than my original conception.
// As a prospective job seeker, I want to make myself more personable by adding a Top Ten list to the bottom of my About Me page with an ordered list in HTML, for instance, my Top Ten Favorite Movies or my Top Ten Places I Want to Visit, or something along those lines.
// As a prospective job seeker, I was to use CSS to creatively and tastefully style and layout my page.
// As a prospective job seeker, I want to have five yes/no questions in my "about me" guessing game so that I have enough questions to cover a variety of things about me.
// As a developer, I want to add a sixth question to my guessing game that takes numeric input by prompting a user to guess a number (for instance, "What is my favorite number?" or "How many Pokémon did I catch yesterday?"), and indicates to the user whether the guess is 'too high' or 'too low', and gives the user exactly four opportunities to get the correct answer, so that my fancy programming skills are showcased.
// As a developer, I want to add a seventh question to my guessing game that has multiple possible correct answers that are stored in an array. For instance, "Can you guess a state that I have lived in besides Washington?", so that even more of my programming skills are showcased. For now, I will structure this question so that the user has six tries to get a single correct answer, and upon using up those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers.
// As a developer, I want to keep a tally of the total number of correct answers given by the user, and at the end of the game, tell the user how well they did with a personalized custom message that includes the number of correct answers and also addresses the user by name, e.g. "You got 4 out of 7 questions correct, Bobbi! Better luck next time."
// User Stories (Stretch goals... not required!)
//
// As a developer, I want to make my code more DRY by putting all of the questions, answers, and responses to the first five yes/no questions in my guessing game into arrays (or even one huge multidimensional array), and modifying the game logic such that a 'for' loop will control the flow from question to question.
// Make the number-guessing question use a random number as its correct answer.
// Move the guessing game to a separate HTML file, list the questions on the page, and then have the answers fill in on the page after the user provides the answers.
// Technical Requirements
//
// Per the user stories, you will need to include in your HTML at least one each of an ordered and an unordered list.
// Use promptfor input and alert for output to the user, unless you are working on the third Stretch Goal.
// Do not use any 'switch' statements in your JavaScript.
// Do not write any functions in your JavaScript.
// Expect that you will probably need both 'for' and 'while' structures for your sixth and seventh questions. But not necessarily.
