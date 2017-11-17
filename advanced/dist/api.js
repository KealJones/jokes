"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nodeFetch = require("node-fetch");

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JokesApi = function () {
  function JokesApi() {
    _classCallCheck(this, JokesApi);

    this.baseUrl = "http://api.icndb.com/jokes";
    this.joke = null;
    this.count = null;
    this.query = {};
  }

  _createClass(JokesApi, [{
    key: "urlPath",
    value: function urlPath(append) {
      if (append !== null) {
        return "/" + append;
      }
      return "";
    }
  }, {
    key: "urlQuery",
    value: function urlQuery() {
      if (this.query) {
        var obj = this.query;
        return Object.keys(this.query).reduce(function (str, key, i) {
          var delimiter, val;
          delimiter = i === 0 ? "?" : "&";
          key = encodeURIComponent(key);
          val = encodeURIComponent(obj[key]);
          return [str, delimiter, key, "=", val].join("");
        }, "");
      }
    }
  }, {
    key: "toUrl",
    value: function toUrl() {
      return this.baseUrl + this.urlPath(this.joke) + this.urlPath(this.count) + this.urlQuery();
    }
  }, {
    key: "toJson",
    value: function toJson() {
      return (0, _nodeFetch2.default)(this.toUrl());
    }
  }]);

  return JokesApi;
}();

exports.default = JokesApi;