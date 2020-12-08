const solution = require("./solution.js");

test("short array", () => {
    const arr = [4, 3, 4, 4, 4, 2]
    expect(solution(arr)).toBe(2);
});

test("short array 2", () => {
    const arr = [4, 4, 2, 5, 3, 4, 4, 4]
    expect(solution(arr)).toBe(3);
});

test("large simple - 10k", () => {
    const arr = new Array(10000).fill(1)
    expect(solution(arr)).toBe(9999);
});
