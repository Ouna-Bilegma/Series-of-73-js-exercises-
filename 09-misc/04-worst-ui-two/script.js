/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  //   var value = parseInt(document.getElementById("part-one").value, 460);
  //   value = isNaN(value) ? 0 : value;
  //   value = value + 460;
  //   document.getElementById("part-one").value = value;
  // })();

  function update() {
    document.getElementById("target").innerHTML =
      document.getElementById("part-one").innerHTML +
      document.getElementById("part-two").innerHTML +
      document.getElementById("part-three").innerHTML +
      document.getElementById("part-four").innerHTML;
  }
  let x = 0;
  let min = 0;
  let max = 9;
  x >= min;
  x <= max;
  document.getElementById("part-one").addEventListener("click", function () {
    document.getElementById("part-one").innerHTML =
      Number(document.getElementById("part-one").innerHTML) +
      Math.round(00 + 1);
    update();
  });

  document.getElementById("part-two").addEventListener("click", function () {
    document.getElementById("part-two").innerHTML =
      Number(document.getElementById("part-two").innerHTML) +
      Math.round(00 + 1);
    update();
  });
  document.getElementById("part-three").addEventListener("click", function () {
    document.getElementById("part-three").innerHTML =
      Number(document.getElementById("part-three").innerHTML) +
      Math.round(00 + 1);
    update();
  });
  document.getElementById("part-four").addEventListener("click", function () {
    document.getElementById("part-four").innerHTML =
      Number(document.getElementById("part-four").innerHTML) +
      Math.round(00 + 1);
    update();
  });
})();
