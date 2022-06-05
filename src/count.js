function count(array, predicate) {
  const total = array.reduce(
    (acc, curr) => (predicate(curr) ? acc + 1 : acc),
    0
  )

  return total
}

module.exports = count
