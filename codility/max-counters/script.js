// https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
// correct but a bit too slow

const test1 = {
    n: 5,
    arr: [3,4,4,6,1,4,4]
}

console.log(solution(test1.n, test1.arr)) // [3,2,2,4,2]

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