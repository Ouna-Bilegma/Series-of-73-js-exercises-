/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  document.getElementById("run").addEventListener("click", function () {
    var dobDay = document.getElementById("dob-day").value;
    var dobMonth = document.getElementById("dob-month").value;
    var dobYear = document.getElementById("dob-year").value;
    var date1 = new Date();
    var date2 = new Date(dobYear);
    var x = date1.getFullYear();
    var y = date2.getFullYear();
    var age = x - y;
    alert(
      "Age : " +
        age +
        " birth data : " +
        dobDay +
        "/" +
        dobMonth +
        "/" +
        dobYear
    );
  });
})();
