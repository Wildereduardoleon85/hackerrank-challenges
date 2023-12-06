function timeConversion(s) {
  function appendZero(h) {
    if (h < 10) {
      return `0${h}`
    }
    return `${h}`
  }

  const period = s.slice(-2)
  const hours = Number(s.slice(0, 2))
  const rest = s.slice(2).slice(0, -2)

  if (hours === 12 && period === 'AM') {
    return `00${rest}`
  }

  if (hours === 12 && period === 'PM') {
    return `12${rest}`
  }

  if (period === 'PM') {
    return `${hours + 12}${rest}`
  }

  return `${appendZero(hours)}${rest}`
}

console.log(timeConversion('12:01:00PM'))
