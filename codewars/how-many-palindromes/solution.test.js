const solution = require("./solution.js");
// const solution = require("./solution2.js");

test("short string - 9 palindromes", () => {
  const str = 'abccba'
  expect(solution(str)).toBe(9);
});

test("short string - 8 palindromes", () => {
  const str = 'feetea'
  expect(solution(str)).toBe(8);
});

test("short string - 6 palindromes", () => {
  const str = 'aaa'
  expect(solution(str)).toBe(6);
});
