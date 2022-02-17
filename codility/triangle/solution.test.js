const solution = require("./solution.js");

test("small array with triangle", () => {
  const arr = [10, 2, 5, 1, 8, 20]
  expect(solution(arr)).toBe(1);
});

test("small array without triangle", () => {
  const arr = [10, 50, 5, 1]
  expect(solution(arr)).toBe(0);
});

test("empty array", () => {
  const arr = []
  expect(solution(arr)).toBe(0);
});

test("array with length 2", () => {
  const arr = [1, 2]
  expect(solution(arr)).toBe(0);
});
