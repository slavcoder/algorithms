const solution = require("./solution.js");

test("short array", () => {
  const arr = [8, 8, 5, 7, 9, 8, 7, 4, 8]
  expect(solution(arr)).toBe(7);
});
