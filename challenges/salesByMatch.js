function sockMerchant(n, ar) {
  let pairCounter = 0
  let socks = {}

  ar.forEach((sock) => {
    if (!Object.keys(socks).includes(sock)) {
      socks[sock] = socks[sock] !== undefined ? socks[sock] + 1 : 1
    }
  })

  Object.values(socks).forEach((item) => {
    if (item >= 2) {
      if (item % 2 === 0) {
        pairCounter = pairCounter + item / 2
      } else {
        pairCounter = pairCounter + (item - 1) / 2
      }
    }
  })

  return pairCounter
}

const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
const n = 9

console.log(sockMerchant(n, ar))
