var assert = require('assert')
var grafi = require('./grafi-invert.js')

var imageData = grafi.invert({data: [255, 255, 255, 255], width: 1, height: 1})

assert(imageData.constructor.toString().match(/function\s(\w*)/)[1] === 'GrafiImageData',
  'returned object is an instance of GrafiImageData')
assert(imageData.data[0] === 0, 'color channel 1 is inverted')
assert(imageData.data[1] === 0, 'color channel 2 is inverted')
assert(imageData.data[2] === 0, 'color channel 3 is inverted')
assert(imageData.data[3] === 255, 'alpha channel is same as the original')
