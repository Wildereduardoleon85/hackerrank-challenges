const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]

function diagonalDifference(arr) {
  let firstDiagonal = 0
  let secondDiagonal = 0

  let firstDimensionCounter = 0
  let secondDimensionCounter = arr.length - 1

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === firstDimensionCounter && j === firstDimensionCounter) {
        firstDiagonal += arr[i][j]
      }

      if (i === firstDimensionCounter && j === secondDimensionCounter) {
        secondDiagonal += arr[i][j]
      }
    }
    firstDimensionCounter += 1
    secondDimensionCounter -= 1
  }

  const difference = firstDiagonal - secondDiagonal

  if (difference < 0) {
    return difference * -1
  }

  return difference
}

console.log(diagonalDifference(arr))
