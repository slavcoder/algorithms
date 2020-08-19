const solution = require("./solution.js");

// reverse test to check multiple possible results

test("short array with dominator", () => {
    const arr = [3, 4, 3, 2, 3, -1, 3, 3]
    expect([0, 2, 3, 6, 7]).toContain(solution(arr));
});

test("short array without dominator", () => {
    const arr = [3, 4, 2, 2, 1, -1, 5, 7]
    expect([-1]).toContain(solution(arr));
});

test("1001 length simple array with dominator", () => {
    const arr = []
    const possibilities = []
    for (let i=0; i<1000; i+=2) {
        arr.push(2)
        arr.push(4)
        possibilities.push(i)
    }
    possibilities.push(arr.length)
    arr.push(4)

    expect(possibilities).toContain(solution(arr));
});

test("50.001 length simple array with dominator", () => {
    const arr = []
    const possibilities = []
    for (let i=0; i<50000; i+=2) {
        arr.push(2)
        arr.push(4)
        possibilities.push(i)
    }
    possibilities.push(arr.length)
    arr.push(4)

    expect(possibilities).toContain(solution(arr));
});

test("50.000 length simple array without dominator", () => {
    const arr = []
    for (let i=0; i<10000; i++) {
        arr.push(2)
        arr.push(4)
        arr.push(5)
        arr.push(0)
        arr.push(-6)
    }

    expect([-1]).toContain(solution(arr));
});

