function pickingNumbers(a) {
  // Count the occurrences of each number
  const frequency = {}
  for (let num of a) {
    frequency[num] = (frequency[num] || 0) + 1
  }

  let maxLength = 0

  // Iterate through unique numbers in the array
  for (let num in frequency) {
    console.log(num)
    // Check the length of the subarray for the current number and the next number (if it exists)
    const currentLength = frequency[num] + (frequency[parseInt(num) + 1] || 0)

    // Update the maximum length
    maxLength = Math.max(maxLength, currentLength)
  }

  return maxLength
}

console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]))
