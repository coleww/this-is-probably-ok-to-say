var tap = require('tap')

var thisIsProbablyOkToSay = require('./')

tap.test('does the thing', function (t) {
  t.plan(1)
  t.equal(thisIsProbablyOkToSay('world'), 'hello world', 'does it')
})
