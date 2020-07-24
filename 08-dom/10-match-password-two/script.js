/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  let originalClass = document.getElementById("pass-one").className;

  document.getElementById("run").onclick = () => {
    let inputPassOne = document.getElementById("pass-one");
    let inputPassTwo = document.getElementById("pass-two");

    if (inputPassOne.value === inputPassTwo.value) {
      inputPassOne.className = originalClass;
      inputPassTwo.className = originalClass;
    } else {
      inputPassOne.className = "error";
      inputPassTwo.className = "error";
    }
  };
})();
