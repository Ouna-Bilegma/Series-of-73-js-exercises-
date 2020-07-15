/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// function calc() {
//   var a = parseInt(number.getElementById("#op-one").value);
//   var b = parseInt(number.getElementById("#op-two").value);
//   var op = document.querySelector("#operator").value;
//   var calculate;

//   if (op == "add") {
//     calculate = a + b;
//   } else if (op == "min") {
//     calculate = a - b;
//   } else if (op == "mul") {
//     calculate = a * b;
//   } else if (op == "div") {
//     calculate = a / b;
//   }

//   document.getElementById("addition").addEventListener("click", fucntion(){
//     alert(parseInt(number.getElementById("op-one").value) + parseInt(number.getElementById("op-two").value));
//   };);

//   document.getElementById("substraction").addEventListener("click", substract);

//   document
//     .getElementById("multiplication")
//     .addEventListener("click", multiplie);

//   document.getElementById("division").addEventListener("click", divide);

//   document.querySelector("#result").innerHTML = calculate;
// }

(function () {
  // to get the value of an input: document.getElementById("element-id").value

  document.getElementById("addition").addEventListener("click", function () {
    // perform an addition
    alert(
      parseInt(document.getElementById("op-one").value) +
        parseInt(document.getElementById("op-two").value)
    );
  });

  document
    .getElementById("substraction")
    .addEventListener("click", function () {
      // perform an substraction
      alert(
        parseInt(document.getElementById("op-one").value) -
          parseInt(document.getElementById("op-two").value)
      );
    });

  document
    .getElementById("multiplication")
    .addEventListener("click", function () {
      // perform an multiplication
      alert(
        parseInt(document.getElementById("op-one").value) *
          parseInt(document.getElementById("op-two").value)
      );
    });

  document.getElementById("division").addEventListener("click", function () {
    // perform an division
    alert(
      parseInt(document.getElementById("op-one").value) /
        parseInt(document.getElementById("op-two").value)
    );
  });
})();
