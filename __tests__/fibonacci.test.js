const fibonacci = require('../src/fibonacci')

describe('fibonacci', () => {
  it('should return an empty array when size is 0', () => {
    expect(fibonacci(0)).toEqual([])
  })

  it('should return fibonacci sequence of given size', () => {
    expect(fibonacci(4)).toEqual([0, 1, 1, 2])
    expect(fibonacci(6)).toEqual([0, 1, 1, 2, 3, 5])
  })
})
