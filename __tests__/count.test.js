const count = require('../src/count')

describe('count', () => {
  it('should return 0 if array is empty', () => {
    expect(count([], () => true)).toBe(0)
  })

  it('should return the total of elements that match the predicate', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    expect(count(array, e => e > 5)).toBe(5)
    expect(count(array, e => e <= 5)).toBe(5)
    expect(count(array, e => e === 5)).toBe(1)
  })
})
