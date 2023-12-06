const s = [2, 2, 1, 3, 2]
const d = 4
const m = 2

function birthday(s, d, m) {
  let ways = 0

  for (let i = 0; i <= s.length - m; i++) {
    let segmentSum = 0
    for (let j = 0; j < m; j++) {
      segmentSum += s[i + j]
    }
    if (segmentSum === d) {
      ways++
    }
  }

  return ways
}

console.log(birthday(s, d, m))
