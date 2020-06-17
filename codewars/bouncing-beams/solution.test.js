const solution = require("./solution.js");

test("6x6 board", () => {
    const arr = [
        "##############",
        "#        \\   #",
        "*   \\        #",
        "#            #",
        "#   \\    /   #",
        "##############",
    ]

    expect(solution(arr)).toStrictEqual({
        position: [0, 1],
        distance: 22,
    });
});
