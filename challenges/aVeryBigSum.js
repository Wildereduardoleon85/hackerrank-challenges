const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

function aVeryBigSum(ar) {
  let counter = 0

  ar.forEach((item) => {
    counter += item
  })

  return counter
}

console.log(aVeryBigSum(ar))
