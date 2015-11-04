
var isCool = require('iscool')({  tragedyHappenedRecently: true,
  customBlacklist: [
  'cry', 'crying', 'tears', 'loss',
    'sad',
    'tragedy',
    'barren',
    'blind',
    'bound',
    'crazy',
    'cripple',
    'crippled',
    'daft',
    'deaf',
    'derp',
    'dumb',
    'feeble',
    'handicap',
    'handicapped',
    'idiot',
    'imbecile',
    'insane',
    'invalid',
    'lame',
    'loon',
    'lunatic',
    'madhouse',
    'mental',
    'mongoloid',
    'manic',
    'nuts',
    'moron',
    'psycho',
    'retard',
    'spaz',
'stupid'



 ] })

module.exports = function (str) {
  return str.split('\W').every(function (word) {
    return !!word ? isCool(word) : true
  })
}
