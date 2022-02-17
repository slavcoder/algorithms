function solution(s, n) {
  const arr = []
  let i = 0, j = 0

  while (true) {
    if (s.indexOf(i) != -1) {
      arr.push(i)

      if (j >= n && arr[j] - n + 1 == arr[j - n + 1]) {
        const testS = arr.slice(j - n + 1, j + 1).join('')

        if (sortString(s) == sortString(testS)) {
          return [arr[j - n + 1], arr[j]]
        }
      }

      j++
    }

    i++
  }

  function sortString(string) {
    return string.split('').sort().join('')
  }
}

module.exports = solution
