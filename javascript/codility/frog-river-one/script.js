// https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/

const test1 = {
    x: 5,
    arr: [1,3,1,4,2,3,5,4]
}

console.log(solution(test1.x, test1.arr)) // 6

function solution(x, arr) {
    const leaves = new Set()
    const arrLength = arr.length

    for(let i = 0; i < arrLength; i++) {
        leaves.add(arr[i])
        if(leaves.size === x) return i
    }

    return -1
}