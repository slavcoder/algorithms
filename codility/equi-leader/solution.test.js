const solution = require("./solution.js");

test("short array", () => {
    const arr = [4, 3, 4, 4, 4, 2]
    expect(solution(arr)).toBe(2);
});

test("short array with negatives", () => {
    const arr = [4, -3, 4, -4, 4, -2, -10, 4]
    expect(solution(arr)).toBe(3);
});
