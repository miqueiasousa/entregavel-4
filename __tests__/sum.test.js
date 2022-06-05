const sum = require('../src/sum')

describe('sum', () => {
  it('Should return 0 if array is empty', () => {
    expect(sum([])).toBe(0)
  })

  it('Should return the value of the first element if array length is equal to 1', () => {
    expect(sum([5])).toBe(5)
  })

  it('Should sum elements from array', () => {
    expect(sum([1, 2, 3])).toBe(6)
  })
})
