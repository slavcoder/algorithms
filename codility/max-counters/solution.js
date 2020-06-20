function solution(n, arr) {
    const counters = new Array(n).fill(0)
    const arrLength = arr.length
    let max = 0

    for(let i = 0; i < arrLength; i++) {
        if (arr[i] === n+1) {
            counters.fill(max)
        }
        else {
            const el = arr[i] -1
            counters[el]++
            max = counters[el] > max ? counters[el] : max
        }
    }

    return counters
}

module.exports = solution