const solution = require("./solution.js");

test("test 1", () => {
  const arr = [9, 3, 9, 3, 9, 7, 9]
  expect(solution(arr)).toBe(7);
});
