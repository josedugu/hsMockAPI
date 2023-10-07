const resultsCtr = require("../controllers/words.controller");
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
];

module.exports = routes;
