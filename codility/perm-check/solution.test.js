const solution = require("./solution.js");

test("small wrong array", () => {
  const arr = [4, 1, 3]
  expect(solution(arr)).toBe(0);
});

test("small correct array", () => {
  const arr = [4, 1, 3, 2]
  expect(solution(arr)).toBe(1);
});
