const solution = require("./solution.js");

test("'A', 0 should return 0", () => {
    expect(solution('A', 0)).toBe(0);
});

test("'A', 10 should return 0", () => {
    expect(solution('A', 10)).toBe(0);
});

test("'B', 1 should return 1", () => {
    expect(solution('B', 1)).toBe(1);
});

test("'C', 2 should return 5", () => {
    expect(solution('C', 2)).toBe(2);
});

test("'D', 3 should return 37", () => {
    expect(solution('D', 37)).toBe(37);
});

test("'E', 4 should return 256", () => {
    expect(solution('E', 4)).toBe(256);
});

test("'E', 8 should return 23280", () => {
    expect(solution('E', 8)).toBe(23280);
});