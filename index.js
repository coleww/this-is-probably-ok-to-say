
var isCool = require('iscool')()

module.exports = function (str) {
  return str.split('\W').every(function (word) {
    return !!word ? isCool(word) : true
  })
}
