/**
  ## invert method
  inverts color of an given image

  ### Parameters
    - imageData `Object`: ImageData object
 */
function invert (imgData) {
  checkColorDepth(imgData)
  var dataLength = imgData.data.length
  var newPixeldata = new Uint8ClampedArray(dataLength)
  var i
  for (i = 0; i < dataLength; i++) {
    // the image has Alpha channel, skip invert every 4th one
    if ((i + 1) % 4 === 0) {
      newPixeldata[i] = imgData.data[i]
      continue
    }
    newPixeldata[i] = 255 - imgData.data[i]
  }
  return formatter(newPixeldata, imgData.width, imgData.height)
}
