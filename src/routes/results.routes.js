const resultsCtr = require("../controllers/words.controller");
const wordsCtr = require("../controllers/updateWord.controller");
const routes = [
  {
    url: "/words",
    method: "POST",
    handler: resultsCtr.postWords
  },
  {
    url: "/:studentKey/level",
    method: "GET",
    handler: resultsCtr.getWords
  },
  {
    url: "/updateWord",
    method: "POST",
    handler: wordsCtr.updateWord
  },
];

module.exports = routes;
