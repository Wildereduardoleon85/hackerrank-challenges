const arr = [1, 1, 2, 2, 3]

function migratoryBirds(arr) {
  const types = {}
  const commonTypes = []

  arr.forEach((bird) => {
    if (!Object.keys(types).includes(bird)) {
      types[bird] = 0
    }
  })

  arr.forEach((bird) => {
    types[bird] += 1
  })

  Object.entries(types).forEach(([key, value]) => {
    if (value === Math.max(...Object.values(types))) {
      commonTypes.push(key)
    }
  })

  return Math.min(...commonTypes)
}

console.log(migratoryBirds(arr))
