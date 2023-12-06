const s = 7
const t = 10
const a = 4
const b = 12
const apples = [2, 3, -4]
const oranges = [3, -2, -4]

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const applesLocation = apples.map((apple) => apple + a)
  const orangesLocation = oranges.map((orange) => orange + b)
  let appleCounter = 0
  let orangeCounter = 0

  for (
    let i = 0;
    i < Math.max(...[applesLocation.length, orangesLocation.length]);
    i++
  ) {
    if (
      i < applesLocation.length &&
      applesLocation[i] >= s &&
      applesLocation[i] <= t
    ) {
      appleCounter += 1
    }

    if (
      i < orangesLocation.length &&
      orangesLocation[i] >= s &&
      orangesLocation[i] <= t
    ) {
      orangeCounter += 1
    }
  }

  console.log(appleCounter)
  console.log(orangeCounter)
}

countApplesAndOranges(s, t, a, b, apples, oranges)
