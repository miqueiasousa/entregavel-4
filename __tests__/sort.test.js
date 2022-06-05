const sort = require('../src/sort')

describe('sort', () => {
  it('Should return the array if the length is less or equal than 1', () => {
    expect(sort([])).toEqual([])
    expect(sort([1])).toEqual([1])
  })

  it('Should return the sorted array', () => {
    expect(sort([3, 2, 1, 4, 5])).toEqual([1, 2, 3, 4, 5])
  })
})
