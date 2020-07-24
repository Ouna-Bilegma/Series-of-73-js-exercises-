/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  var typeWriter = document.getElementById("target");
  var dataText = typeWriter.getAttribute("data-text");
  var count = 0;
  var dataTextlength = dataText.length;
  var setText = () => {
    setTimeout(() => {
      typeWriter.textContent += dataText.charAt(count);
      count++;
      if (count <= dataTextlength) {
        setText();
      }
    }, 100);
  };
  window.onload = () => {
    setText();
  };
})();
