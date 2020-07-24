/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here

  var number = Math.floor(Math.random() * 100 + 1);
  //guess variable to store the guessed number by user
  var guess;
  //output to store output to the user
  var output;
  //if the user guessed the number or not, initialize it to false
  var guessed = false;

  do {
    guess = prompt("Guess the number between 1 and 100");
    if (guess > number) {
      alert("Lower");
      guessed = false;
    } else if (guess < number) {
      alert("Higher");
      guessed = false;
    } else {
      alert("That's it!!");
      guessed = true;
    }
  } while (guessed === false);
})();
