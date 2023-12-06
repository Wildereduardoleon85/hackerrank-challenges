const arr = [1, 3, 5, 7, 9]

function miniMaxSum(arr) {
  const listWithoutMax = arr.map((item) => item)
  const listWithoutMin = arr.map((item) => item)

  const maxIndex = arr.indexOf(Math.max(...arr))
  const minIndex = arr.indexOf(Math.min(...arr))

  listWithoutMax.splice(maxIndex, 1)
  listWithoutMin.splice(minIndex, 1)

  const minSum = listWithoutMax.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )

  const maxSum = listWithoutMin.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )

  console.log(`${minSum} ${maxSum}`)
}

miniMaxSum(arr)
