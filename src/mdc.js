function mdc(a, b) {
  return b === 0 ? a : mdc(b, a % b)
}

module.exports = mdc
