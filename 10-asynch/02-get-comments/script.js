/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  document.getElementById("run").onclick = () => {
    window.lib.getPosts((error, myArticle) => {
      if (error) {
        console.log(error);
      } else {
        let commentedArticle = myArticle.map((oneArticle) => {
          window.lib.getComments(oneArticle.id, (error, myComment) => {
            if (error) {
              console.log(error);
            } else {
              oneArticle.comment = myComment;
            }
          });
          return oneArticle;
        });
        console.log(commentedArticle);
      }
    });
  };
})();
