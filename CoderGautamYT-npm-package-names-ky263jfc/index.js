var fetch = require("isomorphic-fetch")
var randomWords = require('random-words');
var words = randomWords(1000);

(async () => {
   for (const word of words) {
            try {
               const p = await (
                  await fetch(`https://registry.npmjs.org/${word}`)
               ).json();

               if (p.error) { // Couln't find a package with the tested name
                  console.log(word, "isn't in use.");
               } else {
                 //console.log("in use")
               }
            }catch (e) {
               console.log(e);
            }
         }
})();
