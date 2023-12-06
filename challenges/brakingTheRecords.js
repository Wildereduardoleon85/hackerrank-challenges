const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]

function breakingRecords(scores) {
  let highestScore = scores[0]
  let lowestScore = scores[0]
  let highestScoreCount = 0
  let lowestScoreCount = 0

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highestScore) {
      highestScore = scores[i]
      highestScoreCount += 1
    }

    if (scores[i] < lowestScore) {
      lowestScore = scores[i]
      lowestScoreCount += 1
    }
  }

  return [highestScoreCount, lowestScoreCount]
}

console.log(breakingRecords(scores))
