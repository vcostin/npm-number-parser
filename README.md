# npm-number-parser
Module that parse all types of number from a string, returns an array of numbers.
Inspired from [this post](http://stackoverflow.com/a/13637936/2083391)

[![Build Status](https://travis-ci.org/vcostin/npm-number-parser.svg?branch=v0.1.1)](https://travis-ci.org/vcostin/npm-number-parser)

## Installation
```$ npm install --save npm-number-parser```

## Usage
```js
var parseNumbers = require('npm-number-parser');

var numbers = parseNumbers('12 32 3.5 test test2');
console.log(numbers);
//=> [12, 32, 3.5, 2]

numbers = parseNumbers('a string without numbers');
console.log(numbers);
//=> []

//trows error if input it's not a string, see tests
numbers = parseNumbers(null);
```

### Usage with callback
```js
var parseNumbers = require('npm-number-parser');

parseNumbers('12 32 3.5 test test2', function(output){
    console.log(output);
    //=> [12, 32, 3.5, 2]
});

parseNumbers('a string without numbers', function(output){
    console.log(output);
    //=> []
});
```
