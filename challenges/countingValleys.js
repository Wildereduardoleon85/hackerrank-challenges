function countingValleys(steps, path) {
  let altitude = 0
  let valleysCount = 0

  for (let i = 0; i < steps; i++) {
    if (path[i] === 'U') {
      altitude++
    } else {
      altitude--
    }

    // Check if we just came out of a valley
    if (path[i] === 'U' && altitude === 0) {
      valleysCount++
    }
  }

  return valleysCount
}

const steps = 8
const path = ['U', 'D', 'D', 'D', 'U', 'D', 'U', 'U']

console.log(countingValleys(8, path))
