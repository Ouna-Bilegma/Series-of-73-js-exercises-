/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  let tagcontainer = document.getElementById("target");
  let myTable = document.createElement("table");
  let myBodyTable = document.createElement("tbody");

  for (i = 0; i < 10; i++) {
    let myRow = document.createElement("tr");
    for (j = 0; j < 10; j++) {
      let myColumn = document.createElement("td");
      myColumn.innerHTML = (i + 1) * (j + 1);
      myRow.appendChild(myColumn);
    }
    myBodyTable.appendChild(myRow);
  }

  myTable.appendChild(myBodyTable);
  myTable.border = 6;
  tagcontainer.appendChild(myTable);
})();
