const solution = require("./solution.js");

test("array with 5 elements", () => {
  const arr = [2, 1, 1, 2, 3, 1]
  expect(solution(arr)).toBe(3);
});
