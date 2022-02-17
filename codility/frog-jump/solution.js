function solution(X, Y, D) {
  return (Y == X) ? 0 : Math.ceil((Y - X) / D)
}

module.exports = solution
