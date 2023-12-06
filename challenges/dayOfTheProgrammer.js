function dayOfProgrammer(year) {
  function getDaysOfFebruary(year) {
    const isLeapYear = !!(
      year % 400 === 0 ||
      (year % 4 === 0 && year % 100 !== 0)
    )

    if (year === 1918) {
      return 15
    }

    if (year <= 1917) {
      return year % 4 === 0 ? 29 : 28
    }

    return isLeapYear ? 29 : 28
  }

  function appendZero(num) {
    return num < 10 ? `0${num}` : `${num}`
  }

  const calendar = [
    31,
    getDaysOfFebruary(year),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ]

  const programmerDay = 256
  let dayCounter = 0
  let monthCounter = 0

  while (dayCounter + calendar[monthCounter] < programmerDay) {
    dayCounter += calendar[monthCounter]
    monthCounter += 1
  }

  return `${appendZero(programmerDay - dayCounter)}.${appendZero(
    monthCounter + 1
  )}.${year}`
}

console.log(dayOfProgrammer(1800))
