function findFibonacciNumber(i) {
  if (i < 2) {
    return i
  }

  return findFibonacciNumber(i - 1) + findFibonacciNumber(i - 2)
}

function fibonacci(size) {
  if (size === 0) {
    return []
  }

  const sequence = [...Array(size)].map((_, i) => findFibonacciNumber(i))

  return sequence
}

module.exports = fibonacci
