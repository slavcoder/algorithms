const Test = require('../../Test/Test.js')
const solution = require('./solution.js')
const test = new Test()

test.cases = [
    {
        solution: () => solution(0),
        equals: 'now',
    },
    {
        solution: () => solution(62),
        equals: '1 minute and 2 seconds',
    },
    {
        solution: () => solution(3662),
        equals: '1 hour, 1 minute and 2 seconds',
    },
]

test.run()