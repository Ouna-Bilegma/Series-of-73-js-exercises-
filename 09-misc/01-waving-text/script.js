/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  document.getElementById("target").innerHTML =
    "Woo".fontsize(5) +
    "hoo!".fontsize(4) +
    "I'm".fontsize(5) +
    "making waves!".fontsize(4) +
    "Wéééé!".fontsize(6) +
    "Oh ...".fontsize(5) +
    "I think".fontsize(3) +
    "I'm having".fontsize(4) +
    "seasickness ...".fontsize(3);
  // var text =
  // "Woo-hoo! I'm making waves! Wéééé! Oh ... I think I'm having seasickness ...";
  // for (var i = 0; i < text.length; i++) {
  //   if (text[i].style.fontSize) {
  //     var s = parseInt(text[i].style.fontSize.replace("px", ""));
  //   } else {
  //     var s = 12;
  //   }
  //   if (s != max) {
  //     s += 1;
  //   }
  //   text[i].style.fontSize = text + "px";
  // }
})();
