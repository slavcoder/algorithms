// https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/

const test1 = [3,1,2,4,3] // 1
const test2 = [3,2,4,3,-5,2,-8,-1,-3,0,9]
const test3 = [-1000,1000]
// const test3 = [-2,-2,-2,-2,-2]

console.log(solution(test1))
console.log(solution(test2))
console.log(solution(test3))

function solution(arr) {
    const lastElement = arr.length-1
    let left = arr[0]
    let right = arr.reduce((current,previous) => previous+current)-arr[0]
    let res = Math.abs(left - right)

    for(let i = 1; i < lastElement; i++) {
        left += arr[i]
        right -= arr[i]
        res = Math.min(Math.abs(left - right), res)
    }

    return res
}