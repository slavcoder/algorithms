// example usage of custom test class

const Test = require('../../test.js')
const test = new Test(solution)

test.cases = [
    { // 0
        case: [[2, 1]],
        result: [1,2]
    },
    { // 1
        case: [[2, 3, 1]],
        result: [1,3,2]
    },
    { // 2
        case: [[1111, 11]],
        result: [11,1111]
    },
]

test.run()

function solution(arr) {
    if(Math.floor(Math.random()*2)) arr.push(55)
    return arr.reverse()
}