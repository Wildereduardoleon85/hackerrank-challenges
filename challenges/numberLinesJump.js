function kangaroo(x1, v1, x2, v2) {
  if (v2 >= v1) {
    return 'NO'
  }

  let kangaroo1 = x1
  let kangaroo2 = x2

  while (kangaroo1 < kangaroo2) {
    kangaroo1 += v1
    kangaroo2 += v2
  }

  if (kangaroo1 === kangaroo2) {
    return 'YES'
  }

  return 'NO'
}

console.log(kangaroo(0, 3, 4, 2))
