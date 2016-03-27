;(function () {
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

  // ----------- Utilities -----------

  /**
    ## ImageData object constructor
    Every return from grafi method is formatted to an ImageData object.
    This constructor is used when `window` is not available.
   */
  function ImageData (pixelData, width, height) {
    this.width = width
    this.height = height
    this.data = pixelData
  }

  /**
    ## formatter
    Internal function used to format pixel data into ImageData object

    ### Parameters
      - pixelData `Uint8ClampedArray`: pixel representation of the image
      - width `Number`: width of the image
      - hight `Number`: height of the image

    ### Example
        formatter(new Uint8ClampedArray[400], 10, 10)
        // ImageData { data: Uint8ClampedArray[400], width: 10, height: 10, }
   */
  function formatter (pixelData, width, height) {
    var colorDepth = pixelData.length / (width * height)

    // Length of pixelData must be multipul of available pixels (width * height).
    // Maximum color depth allowed is 4 (RGBA)
    if (Math.round(colorDepth) !== colorDepth || colorDepth > 4) {
      throw new Error('data and size of the image does now match')
    }

    if (!(pixelData instanceof Uint8ClampedArray)) {
      throw new Error('pixel data passed is not an Uint8ClampedArray')
    }

    // If window is avilable create ImageData using browser API,
    // otherwise call ImageData constructor
    if (typeof window === 'object') {
      return new window.ImageData(pixelData, width, height)
    }
    return new ImageData(pixelData, width, height)
  }

  if (typeof module === 'object' && module.exports) {
    module.exports = invert
  } else {
    this.grafi_invert = invert
  }
}())
