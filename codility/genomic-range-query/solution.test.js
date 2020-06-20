const solution = require("./solution.js");

test("simple", () => {
    const s = 'CAGCCTA'
    const p = [2,5,0]
    const q = [4,5,6]
    expect(solution(s, p, q)).toStrictEqual([2,4,1]);
});
