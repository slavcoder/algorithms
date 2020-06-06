const Test = require('../..Test')
const solution = require('./solution')

const test = new Test(solution)

test.cases = [
    { // 0
        case: [[2, 1]],
        equals: [1,2],
        notEquals: [1,2]
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