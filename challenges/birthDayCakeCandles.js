const candles = [4, 4, 1, 3]

function birthdayCakeCandles(candles) {
  const tallestCandleIndex = candles.indexOf(Math.max(...candles))

  let tallesCandleCount = 0

  candles.forEach((item) => {
    if (item === candles[tallestCandleIndex]) {
      tallesCandleCount += 1
    }
  })

  return tallesCandleCount
}

console.log(birthdayCakeCandles(candles))
