function solution(arr) {
  arr.sort((a, b) => a - b)
  const arrLength = arr.length
  let res = 1

  if (arr[0] != 1) {
    return res
  }

  for (let i = 0; i < arrLength; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      res = arr[i] + 1
      return res
    }
  }

  return res
}

module.exports = solution
