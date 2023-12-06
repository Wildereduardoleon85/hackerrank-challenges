function catAndMouse(x, y, z) {
  const catADistance = z - x < 0 ? (z - x) * -1 : z - x
  const catBDistance = z - y < 0 ? (z - y) * -1 : z - y

  if (catADistance < catBDistance) {
    return 'Cat A'
  }

  if (catBDistance < catADistance) {
    return 'Cat B'
  }

  return 'Mouse C'
}

const x = 2
const y = 5
const z = 4

catAndMouse(x, y, z)
