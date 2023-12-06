function getMoneySpent(keyboards, drives, b) {
  const choices = []

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      if (keyboards[i] + drives[j] <= b) {
        choices.push(keyboards[i] + drives[j])
      }
    }
  }

  if (choices.length !== 0) {
    return Math.max(...choices)
  }
  return -1
}

const b = 4
const keyboards = [5, 1, 1]
const drives = [5]

console.log(getMoneySpent(keyboards, drives, b))
