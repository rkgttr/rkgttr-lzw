# [rkgttr-lzw](https://github.com/rkgttr/rkgttr-lzw)

[![NPM version](http://img.shields.io/npm/v/rkgttr-lzw.svg?style=flat-square)](https://www.npmjs.com/package/rkgttr-lzw)
[![NPM downloads](http://img.shields.io/npm/dm/rkgttr-lzw.svg?style=flat-square)](https://www.npmjs.com/package/rkgttr-lzw)
[![Build Status](http://img.shields.io/travis/rkgttr/rkgttr-lzw/master.svg?style=flat-square)](https://travis-ci.org/rkgttr/rkgttr-lzw)
[![Dependency Status](http://img.shields.io/david/rkgttr/rkgttr-lzw.svg?style=flat-square)](https://david-dm.org/rkgttr/rkgttr-lzw)

> Small and fast pseudo random number generator. Not the most complex or bullet-proof of PRNGs out there, but fast and small when you want to have "predictable" random numbers. I don't know the period of this generator: I've run a script that generates a million numbers per second and after a day and a half (188 billions iterations) the sequence still did not repeat.  So I guess it's good enough.

### How to Install

```sh
$ npm install rkgttr-lzw --save-dev
```
or

```sh
$ yarn add rkgttr-lzw --dev
```

### Getting Started

```js
var Prng = require('rkgttr-lzw');

var prng = new Prng();
prng.gen();
```
or

```js
import Prng from 'rkgttr-lzw';

let prng = new Prng();
prng.gen();
```
When creating a PRNG instance, you can pass a seed to it:

```js
let prng = new Prng(12);
```

### License

MIT © 2016 Erik Guittiere
