/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  document.getElementById("run").onclick = () => {
    let myPromiseArticles = window.lib.getPosts();

    myPromiseArticles
      .then((MyArticles) => {
        MyArticles.map((oneArticle) => {
          let myPromiseComments = window.lib.getComments(oneArticle.id);
          myPromiseComments
            .then((MyComments) => {
              oneArticle.comment = MyComments;
              return oneArticle;
            })
            .catch((error) => {
              console.error("Comment Error:" + error);
            });
        });
        //Printing commented articles
        console.table(MyArticles);
      })
      .catch((error) => {
        console.error("Article Error: " + error);
      });
  };
})();
