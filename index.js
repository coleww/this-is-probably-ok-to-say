var wordfilter = require('wordfilter')

var createIsCool = require('iscool')
var isCool = createIsCool()

module.exports = function (str) {
  return !wordfilter.blacklisted(str) && isCool(str)
}
