function solution(arr) {
  let res = 0
  arr.sort((a, b) => a - b)
  const arrLength = arr.length

  if (arr[0] == 1 && arrLength == 1) {
    res = 1
  }
  else if (arr[0] == 1) {
    for (let i = 0; i < arrLength - 1; i++) {
      res = (arr[i] + 1 == arr[i + 1]) ? 1 : 0
      if (!res) return res
    }
  }

  return res
}

module.exports = solution
