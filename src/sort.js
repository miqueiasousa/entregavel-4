function quicksort(array) {
  if (array.length <= 1) {
    return array
  }

  const pivot = array[0]
  const left = array.slice(1).filter(item => item < pivot)
  const right = array.slice(1).filter(item => item >= pivot)

  return quicksort(left).concat(pivot, quicksort(right))
}

module.exports = quicksort
