;(function(){

import '../node_modules/grafi-formatter/src/formatter'
import 'invert'

  var grafi = {}
  grafi.invert = invert

  if (typeof module === 'object' && module.exports) {
    module.exports = grafi
  } else {
    this.grafi = grafi
  }
}())
