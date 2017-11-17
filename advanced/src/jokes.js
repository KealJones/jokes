import JokesApi from "./api";

function getJokes() {
  let api = new JokesApi();
  api.joke = "random";
  api.count = 5;
  api.limitTo = "[nerdy]";
  let jokes = api
    .toJson()
    .then(res => {
      return res.json();
    })
    .then(json => showJokes(json))
    .catch(err => {
      throw err;
    });
}

function showJokes(json) {
  let jokes = json.value;
  for (const i in jokes) {
    console.log(`- ${jokes[i].joke}`);
  }
}
export default getJokes();
