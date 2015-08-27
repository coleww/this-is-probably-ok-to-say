#!/usr/bin/env node

var thisIsProbablyOkToSay = require('./')
var argv = require('yargs')
  .alias('h', 'help')
  .help('help')
  .usage('what it do?')
  .example('thisIsProbablyOkToSay lol cool whatever')
  .alias('i', 'intensity')
  .describe('i', 'describe the intensity')
  .argv

if (process.stdin.isTTY) {
  // we are at a terminal!
  var text = argv._.join(' ')

  process.stdout.write(thisIsProbablyOkToSay(text))
  process.stdout.write('\n')
  process.exit()
} else {
  // data is being piped in!
  var data = ''
  process.stdin.resume()
  process.stdin.setEncoding('utf8')
  process.stdin.on('data', function (chunk) {
    data += chunk
  })

  process.stdin.on('end', function () {
    process.stdout.write(thisIsProbablyOkToSay(data))
    process.stdout.write('\n')
    process.exit()
  })

  // // be sure to use the correct exit code if an error occurs:
  // if (err) {
  //   process.exit(1)
  // }

  // if this module is CLI only, be sure to add
  // "preferGlobal": true,
  // to yr package.json
}
