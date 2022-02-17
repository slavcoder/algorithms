const solution = require("./solution.js");

test("test 1", () => {
  const n = 5
  const arr = [3, 4, 4, 6, 1, 4, 4]
  expect(solution(n, arr)).toStrictEqual([3, 2, 2, 4, 2]);
});
