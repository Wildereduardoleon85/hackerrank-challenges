function getTotalX(a, b) {
  let count = 0

  for (let i = 1; i <= Math.max(...b); i++) {
    if (
      a.every((factor) => i % factor === 0) &&
      b.every((element) => element % i === 0)
    ) {
      count++
    }
  }

  return count
}

// Example usage:
const arrayA = [2, 4]
const arrayB = [16, 32, 96]

const result = getTotalX(arrayA, arrayB)
console.log(result) // Output: 2
