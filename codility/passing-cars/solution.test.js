const solution = require("./solution.js");

test("test 1", () => {
  const arr = [0, 1, 0, 1, 1]
  expect(solution(arr)).toBe(5);
});
