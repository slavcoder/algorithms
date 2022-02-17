const solution = require("./solution.js");

test("short array", () => {
  const arr = [3, 2, 6, -1, 4, 5, -1, 2]
  expect(solution(arr)).toBe(17);
});
