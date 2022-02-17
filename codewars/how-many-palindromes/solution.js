function solution(s) {
  let res = 0
  const sLength = s.length

  for (let i = 0; i < sLength; i++) {
    let tempS = s[i]
    let revS = s[i]

    for (let j = i + 1; j < sLength; j++) {
      tempS += s[j]
      revS = s[j] + revS
      if (tempS === revS) res++
    }
  }

  return res + sLength
}

module.exports = solution
