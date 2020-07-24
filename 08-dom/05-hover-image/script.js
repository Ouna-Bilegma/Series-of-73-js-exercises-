/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  let objContainer = document.getElementsByTagName("img")[0];
  let originalImg = objContainer.src;
  let newImg = objContainer.getAttribute("data-hover");

  objContainer.addEventListener("mouseover", () => {
    objContainer.src = newImg;
  });
  objContainer.onmouseout = () => {
    objContainer.src = originalImg;
  };
})();
