function solution(a, b) {
  const aLength = a.length
  const stack = []

  class Fish {
    constructor(size, direction) {
      this.size = size
      this.direction = direction
    }
  }

  for (let i = 0; i < aLength; i++) {
    if (!i) {
      stack.push(new Fish(a[i], b[i]))
    }
    else {
      let lastFish = getLastFish()
      const nextFish = new Fish(a[i], b[i])
      let fishFight = true

      while (fishFight) {
        if (lastFish.direction && !nextFish.direction) {

          if (lastFish.size < nextFish.size) {
            stack.pop()
            if (!stack.length) {
              stack.push(nextFish)
              fishFight = false
            }
            else {
              lastFish = getLastFish()
            }
          }
          else {
            fishFight = false
          }
        }
        else {
          stack.push(nextFish)
          fishFight = false
        }
      }
    }
  }

  function getLastFish() {
    return stack[stack.length - 1]
  }

  return stack.length
}

module.exports = solution
