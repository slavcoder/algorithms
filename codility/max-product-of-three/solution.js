function solution(A) {
  const arr = A.sort((a, b) => a - b)
  const last = arr.length - 1
  const first = arr[0] * arr[1] * arr[last]
  const second = arr[last] * arr[last - 1] * arr[last - 2]

  return Math.max(first, second)
}

module.exports = solution
