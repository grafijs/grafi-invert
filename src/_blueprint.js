;(function(){

import 'invert'

// ----------- Utilities -----------

import '../node_modules/grafi-formatter/src/formatter.js'

  if (typeof module === 'object' && module.exports) {
    module.exports = invert
  } else {
    this.grafi_invert = invert
  }
}())
