const solution = require("./solution.js");

test("5 fishes in the river", () => {
    const sizes = [4,3,2,1,5]
    const directions = [0,1,0,0,0]
    expect(solution(sizes, directions)).toBe(2);
});
