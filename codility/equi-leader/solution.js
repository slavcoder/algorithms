function solution(arr) {
  let res = 0
  const ob = {}
  const length = [0, arr.length]

  arr.forEach(el => {
    if (ob[el]) {
      ob[el][1]++
    }
    else {
      ob[el] = [0, 1]
    }
  })

  const obKeys = Object.keys(ob)
  const obKeysLength = obKeys.length

  arr.forEach(el => {
    length[0]++
    length[1]--

    ob[el][0]++
    ob[el][1]--

    for (let i = 0; i < obKeysLength; i++) {
      const leftLeader = ob[obKeys[i]][0] > length[0] / 2 ? true : false
      const rightLeader = ob[obKeys[i]][1] > length[1] / 2 ? true : false
      if (leftLeader && rightLeader) {
        res++
        break
      }
    }
  })

  return res
}

module.exports = solution
