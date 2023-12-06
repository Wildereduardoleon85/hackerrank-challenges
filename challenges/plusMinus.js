const arr = [1, 1, 0, -1, -1]

function plusMinus(arr) {
  let positives = 0
  let zeros = 0
  let negatives = 0

  arr.forEach((num) => {
    if (num > 0) {
      positives += 1
    } else if (num === 0) {
      zeros += 1
    } else {
      negatives += 1
    }
  })

  const positivesRatio = (positives / arr.length).toFixed(6)
  const zerosRatio = (zeros / arr.length).toFixed(6)
  const negativesRatio = (negatives / arr.length).toFixed(6)

  console.log(positivesRatio)
  console.log(negativesRatio)
  console.log(zerosRatio)
}

plusMinus(arr)
