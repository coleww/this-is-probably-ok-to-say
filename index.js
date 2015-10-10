
var isCool = require('iscool')()

module.exports = function (str) {
  return str.split(' ').every(function (word) {
    var nw = word.match(/\w+/)
    return nw ? isCool(nw[0]) : true
  })
}
