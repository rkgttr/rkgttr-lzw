# [rkgttr-lzw](https://github.com/rkgttr/rkgttr-lzw)

[![NPM version](http://img.shields.io/npm/v/rkgttr-lzw.svg?style=flat-square)](https://www.npmjs.com/package/rkgttr-lzw)
[![NPM downloads](http://img.shields.io/npm/dm/rkgttr-lzw.svg?style=flat-square)](https://www.npmjs.com/package/rkgttr-lzw)
[![Build Status](http://img.shields.io/travis/rkgttr/rkgttr-lzw/master.svg?style=flat-square)](https://travis-ci.org/rkgttr/rkgttr-lzw)
[![Dependency Status](http://img.shields.io/david/rkgttr/rkgttr-lzw.svg?style=flat-square)](https://david-dm.org/rkgttr/rkgttr-lzw)

> JavaScript implementation of the LZW algorithm for encoding and decoding strings. Pretty useless in browser if you use GZIP compression, but could be cool to obsfuscate data.

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
var LZW = require('rkgttr-lzw');

var encoded = LZW.encode('lorem ipsum dolor sit amet');
var decoded = LZW.decode(encoded);
```
or

```js
import LZW from 'rkgttr-lzw';

let encoded = LZW.encode('lorem ipsum dolor sit amet');
let decoded = LZW.decode(encoded);
```


### License

MIT © 2016 Erik Guittiere
