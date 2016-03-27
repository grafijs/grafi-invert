;(function(){

import '../node_modules/grafi-formatter/src/formatter.js'

import 'invert'

  if (typeof module === 'object' && module.exports) {
    module.exports = invert
  } else {
    this.grafi_invert = invert
  }
}())
