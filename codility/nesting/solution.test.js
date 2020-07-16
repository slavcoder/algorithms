const solution = require("./solution.js");

test("small - correct", () => {
    const str = '(()(())())'
    expect(solution(str)).toBe(1);
});

test("small - incorrect", () => {
    const str = '(()))'
    expect(solution(str)).toBe(0);
});

test("small - invalid structure, but the number of paratheses matches", () => {
    const str = ')('
    expect(solution(str)).toBe(0);
});

