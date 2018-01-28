const countWater = (vertical) => {
  var maxHeight = Math.max(...vertical)
  var waterCount = [];

  for(var j = 0; j < maxHeight; j++){
    var matrixRow = vertical.map((height, i) => {
      return height > j ? String(i) : " "
    }).join("")

    matrixRow = matrixRow.trim()

    let offset = parseInt(matrixRow[0])
    matrixRow.split("").map((well, x) => {
      if(well === " "){ waterCount.push( offset + x ) }
    })
  }
  return waterCount.sort()
}

const longestWater = (array) => {
  var longest = []
  var start = 0, end = 1

  for(var i = 1; i<array.length; i++) {
    let curr = array[i]
    let prev = array[i - 1]
    if(curr == prev || curr == prev + 1) {
      end = i + 1
    } else {
      if(end - start > longest.length) {
        longest = array.slice(start, end)
      }
      start = i, end = i + 1;
    }
  }
  return longest;
}

const findDeepestWell = (wellHeights) => {
  let water = countWater(wellHeights)
  let deepestWell = longestWater(water)
  return [ deepestWell[0],
           deepestWell[deepestWell.length - 1] + 2,
           deepestWell.length]
}

module.exports = { countWater, longestWater, findDeepestWell };
