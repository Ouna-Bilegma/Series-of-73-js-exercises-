/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // to get the value of an input: document.getElementById("element-id").value
  let x = document.getElementById("op-one");
  let y = document.getElementById("op-two");

  const performOperation = (operation) => {
    // perform the operation
    let total = 0;
    switch (operation) {
      case "addition":
        total = parseInt(x.value) + parseInt(y.value);
        break;
      case "substraction":
        total = parseInt(x.value) - parseInt(y.value);
        break;
      case "multiplication":
        total = parseInt(x.value) * parseInt(y.value);
        break;
      case "division":
        total = parseInt(x.value) / parseInt(y.value);
        break;
      default:
      // code block
    }
    alert(total);
  };
  Array.from(document.querySelectorAll("button.operator")).forEach(($btn) =>
    $btn.addEventListener("click", () => (performOperation($btn.id), false))
  );
})();
