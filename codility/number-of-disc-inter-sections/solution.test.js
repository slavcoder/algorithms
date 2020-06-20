const solution = require("./solution.js");

test("test 1", () => {
    const arr = [1,5,2,1,4,0]
    expect(solution(arr)).toBe(11);
});
