function sum(array) {
  if (array.length === 1) {
    return array[0]
  }

  const total = array.reduce((acc, curr) => acc + curr, 0)

  return total
}

module.exports = sum
