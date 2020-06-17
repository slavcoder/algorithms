const Test = require('../../Test/Test.js');
const solution = require("./solution.js");
const test = new Test();

test.cases = [
    {
        solution: () =>
            solution([
                "##############",
                "#        \\   #",
                "*   \\        #",
                "#            #",
                "#   \\    /   #",
                "##############",
            ]),
        equals: {
            position: [0, 1],
            distance: 22,
        },
    },
];

test.run();
