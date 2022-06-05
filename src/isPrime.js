function isPrime(num) {
  if (num < 0) {
    throw new Error('num must be greater than 0')
  }

  if (num < 2) {
    return false
  }

  let i = 2

  while (i < num) {
    if (num % i === 0) {
      return false
    }

    i += 1
  }

  return true
}

module.exports = isPrime
