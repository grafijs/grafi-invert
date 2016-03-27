/**
  ## invert method
  inverts color of an given image

  ### Parameters
    - imageData `Object`: ImageData object
 */
function invert (imgData) {
  // colorDepth: How many byte per pixel this image has
  //             maximum colorDepth possible is 4 (RGBA)
  var dataLength = imgData.data.length
  var colorDepth = dataLength / (imgData.width * imgData.height)
  var processedPixeldata = new Uint8ClampedArray(dataLength)
  var i
  for (i = 0; i < dataLength; i++) {
    // colorDepth 4 = the image has Alpha channel, skip invert every 4th byte
    if (colorDepth === 4 && ((i + 1) % 4) === 0) {
      processedPixeldata[i] = imgData.data[i]
      continue
    }
    processedPixeldata[i] = 255 - imgData.data[i]
  }
  return formatter(processedPixeldata, imgData.width, imgData.height)
}
