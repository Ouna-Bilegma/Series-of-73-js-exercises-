/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  var name = window.prompt("Enter your name: ");
  var gender = window.prompt("Enter your gender: ");
  var town = window.prompt("Enter your town: ");
  var firstChar = name.slice(0, 1);
  var upperCaseFirstChar = firstChar.toLocaleUpperCase();
  var restOfname = name.slice(1, name.length);
  var capitalisedName = upperCaseFirstChar + restOfname;
  confirm(
    " Your name is " +
      capitalisedName +
      " Your gender is " +
      gender +
      " Your town is " +
      town
  );
})();
