const solution = require("./solution.js");

test("0 equal 'now'", () => {
    expect(solution(0)).toBe('now');
});

test("62 equal '1 minute and 2 seconds'", () => {
    expect(solution(62)).toBe('1 minute and 2 seconds');
});

test("3662 equal '1 hour, 1 minute and 2 seconds'", () => {
    expect(solution(3662)).toBe('1 hour, 1 minute and 2 seconds');
});
