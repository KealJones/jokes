import fetch from "node-fetch";
export default class JokesApi {
  constructor() {
    this.baseUrl = "http://api.icndb.com/jokes";
    this.joke = null;
    this.count = null;
    this.query = {};
  }
  urlPath(append) {
    if (append !== null) {
      return "/" + append;
    }
    return "";
  }
  urlQuery() {
    if (this.query) {
      let obj = this.query;
      return Object.keys(this.query).reduce(function(str, key, i) {
        var delimiter, val;
        delimiter = i === 0 ? "?" : "&";
        key = encodeURIComponent(key);
        val = encodeURIComponent(obj[key]);
        return [str, delimiter, key, "=", val].join("");
      }, "");
    }
  }
  toUrl() {
    return (
      this.baseUrl +
      this.urlPath(this.joke) +
      this.urlPath(this.count) +
      this.urlQuery()
    );
  }
  toJson() {
    return fetch(this.toUrl());
  }
}
