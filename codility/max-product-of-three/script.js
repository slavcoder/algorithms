// https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/

const test1 = [-3,1,2,-2,5,6]
const test2 = [-3,-2,-1,-5,-2,-1,-8]

console.log(solution(test1))
console.log(solution(test2))

function solution(A) {
    const arr = A.sort((a,b) => a-b)
    const last = arr.length-1
    const first =  arr[0] * arr[1] * arr[last]
    const second = arr[last] * arr[last-1] * arr[last-2]

    return Math.max(first, second)
}