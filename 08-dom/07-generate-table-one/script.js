/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
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
    let myColumn = document.createElement("td");
    myColumn.innerHTML = "This is table";
    myRow.appendChild(myColumn);
    myBodyTable.appendChild(myRow);
  }

  myTable.appendChild(myBodyTable);
  myTable.border = 5;
  tagcontainer.appendChild(myTable);
})();
