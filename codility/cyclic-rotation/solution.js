function solution(A, K) {
  const arrLength = A.length
  if (arrLength) {
    for (let i = 1; i <= K; i++) {
      const el = A[arrLength - 1]
      A.pop()
      A.unshift(el)
    }
  }

  return A
}

module.exports = solution
