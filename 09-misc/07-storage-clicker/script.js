/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  //   document.getElementById("increment").addEventListener("click", function () {
  //     var count = 0;
  //     count++;
  //     var printer = count;
  //     if (typeof Storage !== "undefined") {
  //       localStorage.setItem("count");
  //       document.getElementById("target").innerHTML = localStorage.getItem(
  //         "count"
  //       );
  //     } else {
  //       document.getElementById("increment").innerHTML =
  //         "Sorry, your browser does not support Web Storage...";
  //     }
  //   })();
  document.getElementById("increment").addEventListener("click", function () {
    var count = 0;
    count++;
    document.getElementById("target").innerHTML = count;
    localStorage.setItem("count", 1);
    console.log("localStorage");
  });
})();
