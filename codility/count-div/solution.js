function solution(a, b, k) {
    return Math.floor(b/k)  - Math.floor((a-1)/k)
}

module.exports = solution