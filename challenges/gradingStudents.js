const grades = [73, 67, 38, 33]

function gradingStudents(grades) {
  function getDifferenceBetweenMultipleOf5(number) {
    let newN = number
    let difference = 0

    while (newN % 5 !== 0) {
      newN += 1
      difference += 1
    }

    return difference
  }

  const newGrades = grades

  grades.forEach((grade, index) => {
    const difference = getDifferenceBetweenMultipleOf5(grade)
    if (difference < 3 && grade >= 38) {
      newGrades[index] = grade + difference
    }
  })

  return newGrades
}

console.log(gradingStudents(grades))
