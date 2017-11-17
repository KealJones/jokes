"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require("./api");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getJokes() {
  var api = new _api2.default();
  api.joke = "random";
  api.count = 5;
  api.limitTo = "[nerdy]";
  var jokes = api.toJson().then(function (res) {
    return res.json();
  }).then(function (json) {
    return showJokes(json);
  }).catch(function (err) {
    throw err;
  });
}

function showJokes(json) {
  var jokes = json.value;
  for (var i in jokes) {
    console.log("- " + jokes[i].joke);
  }
}
exports.default = getJokes();