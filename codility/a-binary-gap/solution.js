function solution(N) {
  let res = N.toString(2)
  const resLength = res.length
  const lastIndex = (res.charAt(resLength - 1) == 1) ? resLength : -1

  return res.split('1')
    .slice(0, lastIndex)
    .sort()
    .reverse()[0]
    .length
}

module.exports = solution
