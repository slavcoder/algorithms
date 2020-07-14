const solution = require("./solution.js");

test("small numbers", () => {
    expect(solution(6,11,2)).toBe(3);
});

test("same numbers", () => {
    expect(solution(6,6,2)).toBe(1);
});

test("same numbers - no correct", () => {
    expect(solution(6,6,4)).toBe(0);
});

test("same numbers with k = 1", () => {
    expect(solution(6,6,1)).toBe(1);
});
