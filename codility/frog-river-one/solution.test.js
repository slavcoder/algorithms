const solution = require("./solution.js");

test("test 1", () => {
    const x =  5
    const arr = [1,3,1,4,2,3,5,4]
    expect(solution(x, arr)).toBe(6);
});
