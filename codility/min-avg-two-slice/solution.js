function solution(A) {
  const arr = A
  const maxAvg = 10000
  let resIndex = 0
  let avg = maxAvg
  const arrLength = arr.length

  for (let i = 0; i < arrLength - 1; i++) {
    resIndex = checkAvg(i, 4) ? i : resIndex
  }

  function checkAvg(el, depth) {
    let sum = arr[el]
    let res = maxAvg

    for (let i = 1; i < depth; i++) {
      sum += arr[el + i]
      let avg = sum / (i + 1)
      res = (avg < res) ? avg : res
    }

    if (res < avg) {
      avg = res
      return true
    }

    return false
  }

  return resIndex
}

module.exports = solution
