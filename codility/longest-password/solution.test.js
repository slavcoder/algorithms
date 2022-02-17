const solution = require("./solution.js");

test("simple string with 5 passwords", () => {
  const str = 'test 5 a0A pass007 ?xy1'
  expect(solution(str)).toBe(7);
});
