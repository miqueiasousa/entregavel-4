const isPrime = require('../src/isPrime')

describe('isPrime', () => {
  it('Should throw if number is negative', () => {
    expect(() => isPrime(-1)).toThrow()
  })

  it('Should return false is number is less than 2', () => {
    expect(isPrime(1)).toBe(false)
    expect(isPrime(0)).toBe(false)
  })

  it('Should return true if number is prime', () => {
    expect(isPrime(2)).toBe(true)
    expect(isPrime(7)).toBe(true)
  })
})
