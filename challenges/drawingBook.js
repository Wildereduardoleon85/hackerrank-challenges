function pageCount(n, p) {
  const arr2Dim = []
  let counter = -1
  let foundIndex = 0

  for (let i = 0; i < (n + 1) / 2; i++) {
    arr2Dim[i] = []
    for (let j = 0; j < 2; j++) {
      arr2Dim[i][j] = counter += 1
    }
  }

  if (((n + 1) / 2) % 2 !== 0) {
    const lastIndex = arr2Dim.length - 1
    arr2Dim[lastIndex][arr2Dim[lastIndex].length - 1] = 0
  }

  arr2Dim.forEach((i, index) => {
    i.forEach((j) => {
      if (p === j) {
        foundIndex = index
      }
    })
  })

  if (foundIndex - 0 < arr2Dim.length - 1 - foundIndex) {
    return foundIndex - 0
  } else {
    return arr2Dim.length - 1 - foundIndex
  }
}

pageCount(5, 4)
