function solution(n) {
  let res = 0

  for (let i = 1; i <= n; i++) {
    res += i
  }

  return res * 50
}

module.exports = solution
