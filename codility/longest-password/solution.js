function solution(S) {
  let res = -1;
  const arr = S.split(' ')
    .sort((a, b) => b.length - a.length)

  for (let i = 0; i < arr.length; i++) {
    checkPassword(arr[i])

    if (res > 0) {
      return res
    }
  }

  function checkPassword(password) {
    let correctPassword = true
    let test = password.replace(/[a-z]/gi, '')
      .replace(/[0-9]/g, '');

    if (test.length) {
      correctPassword = false
    }
    else {
      let numbers = password.replace(/[a-z]/gi, '')
      let letters = password.replace(/[0-9]/g, '')

      if (letters.length % 2 != 0 || numbers.length % 2 == 0) {
        correctPassword = false
      }
    }

    if (correctPassword) {
      res = password.length
      return res
    }
  }

  return res
}

module.exports = solution
