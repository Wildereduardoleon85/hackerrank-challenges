const ar = [1, 2, 3, 4, 5, 6]
const k = 5
const n = 6

function divisibleSumPairs(n, k, ar) {
  const combinations = [ar]
  const breaKpoints = [n - 1]
  let combinationsCounter = 2
  let breaKpointsCounter = n - 2
  let iterator = 0
  let ways = 0

  for (let i = 0; i < n - 2; i++) {
    combinations.push(ar.slice(combinationsCounter, n))
    breaKpoints.push(breaKpoints[i] + breaKpointsCounter)
    breaKpointsCounter -= 1
    combinationsCounter += 1
  }

  for (let i = 0; i < breaKpoints[breaKpoints.length - 1]; i++) {
    const flatened = combinations.flat()
    if ((flatened[iterator] + flatened[i + 1]) % k === 0) {
      ways += 1
    }
    if (breaKpoints.includes(i + 1)) {
      iterator += 1
    }
  }

  return ways
}

console.log(divisibleSumPairs(n, k, ar))
