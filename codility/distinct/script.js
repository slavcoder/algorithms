// https://app.codility.com/programmers/lessons/6-sorting/distinct/

const test1 = [1,2,3,3,2,3,3,1]

console.log(solution(test1))

function solution(arr) {
    const distinct = new Set()
    
    arr.forEach(el => {
        distinct.add(el)
    })

    return distinct.size
}