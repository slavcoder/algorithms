const solution = require("./solution.js");

test("convert 0 seconds", () => {
    expect(solution(0)).toBe('now');
});

test("convert 62 seconds", () => {
    expect(solution(62)).toBe('1 minute and 2 seconds');
});

test("convert 3662 seconds", () => {
    expect(solution(3662)).toBe('1 hour, 1 minute and 2 seconds');
});
