function solution(arr) {
  const lastElement = arr.length - 1
  let left = arr[0]
  let right = arr.reduce((current, previous) => previous + current) - arr[0]
  let res = Math.abs(left - right)

  for (let i = 1; i < lastElement; i++) {
    left += arr[i]
    right -= arr[i]
    res = Math.min(Math.abs(left - right), res)
  }

  return res
}

module.exports = solution
