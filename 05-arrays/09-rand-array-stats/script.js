/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  document.getElementById("run").addEventListener("click", function () {
    let min = 1;
    let max = 100;
    let rand = Math.random();
    let randomNumber = Math.floor(rand * (max - min + 1)) + min;
  })();
})();
