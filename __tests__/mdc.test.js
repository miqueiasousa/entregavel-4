const mdc = require('../src/mdc')

describe('mdc', () => {
  it('Should return other number if a or b is equal to 0', () => {
    expect(mdc(24, 0)).toBe(24)
    expect(mdc(0, 24)).toBe(24)
  })

  it('should return the mdc of two numbers', () => {
    expect(mdc(24, 9)).toBe(3)
    expect(mdc(30, 20)).toBe(10)
  })
})
