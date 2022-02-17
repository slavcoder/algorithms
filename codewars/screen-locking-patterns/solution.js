function solution(firstPoint, length) {
  if (!length || length > 9) return 0

  let arr = [firstPoint]
  let res = 1

  const possibilities = {
    A: ['B', 'D', 'E', 'F', 'H'],
    B: ['A', 'C', 'D', 'E', 'F', 'G', 'I'],
    C: ['B', 'D', 'E', 'F', 'H'],
    D: ['A', 'B', 'C', 'E', 'G', 'H', 'I'],
    E: ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I'],
    F: ['A', 'B', 'C', 'E', 'G', 'H', 'I'],
    G: ['B', 'D', 'E', 'F', 'H'],
    H: ['A', 'C', 'D', 'E', 'F', 'G', 'I'],
    I: ['B', 'D', 'E', 'F', 'H']
  }

  for (let i = 0; i < length - 1; i++) {
    console.log(res)
    arr = calculate(arr, i)
  }

  function calculate(arr, used) {
    let tempArr = []
    arr.forEach(el => {
      res += Math.max(possibilities[el].length - used, 1)
      tempArr = [...tempArr, ...possibilities[el]]
    })

    return tempArr
  }

  return res
}

module.exports = solution
