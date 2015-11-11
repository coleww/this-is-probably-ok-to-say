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

tap.test('false for bad sequences', function (t) {
  t.plan(2)
  t.ok(!thisIsProbablyOkToSay('have a personality disorder'))
  t.ok(thisIsProbablyOkToSay('despite the disorder of society i have a great personality'))
})

tap.test('false for negative sensitive sequences', function (t) {
  t.plan(2)
  t.ok(!thisIsProbablyOkToSay('americans are crappy depressed sad hate hate pain'))
  t.ok(thisIsProbablyOkToSay('i love americans so much, passionately.'))
})