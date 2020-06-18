const solution = require("./solution.js");

test("[4,3,6] should return 4", () => {
    expect(solution([4,3,6])).toBe(4);
});

test("[7,6,21] should return 1", () => {
    expect(solution([7,6,21])).toBe(1);
});

test("[0,0] should return 1", () => {
    expect(solution([0,0])).toBe(1);
});

test("[2,2,2,0] should return 4", () => {
    expect(solution([2,2,2,0])).toBe(4);
});
