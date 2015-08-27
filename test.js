var tap = require('tap')

var thisIsProbablyOkToSay = require('./')
// hmm what is the least offensive offensive string to use to test this?
tap.test('false for bad words', function (t) {
  t.plan(1)
  t.ok(!thisIsProbablyOkToSay('son of a bitch'))
})

tap.test('true for good words', function (t) {
  t.plan(1)
  t.ok(thisIsProbablyOkToSay('peace unto the world'))
})
