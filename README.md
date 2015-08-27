this-is-probably-ok-to-say
----------------


[![NPM](https://nodei.co/npm/this-is-probably-ok-to-say.png)](https://nodei.co/npm/this-is-probably-ok-to-say/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Build Status](https://secure.travis-ci.org/YR_TRAVIS_USER_NAME/this-is-probably-ok-to-say.png)](http://travis-ci.org/YR_TRAVIS_USER_NAME/this-is-probably-ok-to-say)


TIPOTS!

![a stern reproachful glare](stern_glare.png)

This module just wraps around several other modules to try to determine whether or not a given string is probably ok to say. 

[wordfilter](https://www.npmjs.com/package/wordfilter) and [iscool](https://www.npmjs.com/package/iscool) are awesome tools, but installing them on every public facing project is a pain. Also wordfilter returns true if a string is bad and iscool returns true if a string is ok, which gets...confusing. I wanted to be able to just require one thing that has 1 method that just returns true/false. Plus maybe this could do other stuff later, like when a third content filter node module pops up, or some bayes filter jerk detection.

### EXAMPLE

### API
