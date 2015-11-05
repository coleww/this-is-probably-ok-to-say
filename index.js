var customList = require('./customList')
var isCool = require('iscool')({tragedyHappenedRecently: true, customBlacklist: customList})
var badSequences = require('./badSequences')

module.exports = function (str) {
    var words = str.split(/\W/).filter(function (x) {return !!x}).map(function (w) {return w.toLowerCase()})

    return words.every(function (word) {
        return isCool(word)
    }) && badSequences.every(function (seq) {
        var seqWords = seq.split(' ')
        var i = words.indexOf(seqWords[0])
        return !(i !== -1 && words.indexOf(seqWords[1]) === i + 1)
    })
}
