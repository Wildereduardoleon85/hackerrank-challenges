function staircase(n) {
  const stairCaseArray = []

  let counter = n

  for (let i = 0; i < n; i++) {
    stairCaseArray[i] = []
    for (let j = 0; j < n; j++) {
      if (j + 1 >= counter) {
        stairCaseArray[i][j] = '#'
      } else {
        stairCaseArray[i][j] = ' '
      }
    }

    counter -= 1
  }

  stairCaseArray.forEach((item) => {
    console.log(item.join(''))
  })
}

console.log(staircase(9))
