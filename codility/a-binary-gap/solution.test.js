const solution = require("./solution.js");

test("561892 input should return 3", () => {
  expect(solution(561892)).toBe(3);
});

test("10000000 input should return 3", () => {
  expect(solution(10000000)).toBe(3);
});

test("121 input should return 2", () => {
  expect(solution(121)).toBe(2);
});
