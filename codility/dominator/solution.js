function solution(A) {
  const halfLength = Math.floor(A.length / 2)
  const obj = {}

  for (let i = 0; i < A.length; i++) {
    obj[A[i]] = obj[A[i]] === undefined ? 1 : obj[A[i]] + 1
    if (obj[A[i]] > halfLength) return i
  }

  return -1
}

module.exports = solution
