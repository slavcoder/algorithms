const solution = require("./solution.js");

test("test 1", () => {
  const arr = [-3, 1, 2, -2, 5, 6]
  expect(solution(arr)).toBe(60);
});
