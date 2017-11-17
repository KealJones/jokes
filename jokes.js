var fetch = require("node-fetch");

fetch("http://api.icndb.com/jokes/random/5?limitTo=[nerdy]")
  .then(res => {
    return res.json();
  })
  .then(json => {
    var jokes = json.value;
    for (var i in jokes) {
      console.log("- " + jokes[i].joke);
    }
  })
  .catch(err => {
    throw err;
  });
