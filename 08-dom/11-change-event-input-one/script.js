/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  let passOne = document.getElementById("pass-one");

  //Listening
  passOne.onkeypress = () => {
    let size = document.getElementById("pass-one").value.length;
    if (size > 9) {
      return false;
    }
  };

  passOne.oninput = () => {
    let size = document.getElementById("pass-one").value.length;
    document.getElementById("counter").innerHTML = size + "/10";
  };
})();
