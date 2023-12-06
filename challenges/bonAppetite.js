function bonAppetit(bill, k, b) {
  const totalCost = bill.reduce((sum, cost) => sum + cost, 0)
  const annaShare = (totalCost - bill[k]) / 2

  if (annaShare === b) {
    console.log('Bon Appetit')
  } else {
    console.log(b - annaShare)
  }
}

const bill = [3, 10, 2, 9]
const k = 1
const b = 12
bonAppetit(bill, k, b)
