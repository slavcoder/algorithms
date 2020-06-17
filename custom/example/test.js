const Test = require('../../Test/Test.js')
const solution = require('./solution.js')
const test = new Test()

test.cases = [
    {
        solution: () => solution([2,1]),
        equals: [1,2],
    },
]

test.run()