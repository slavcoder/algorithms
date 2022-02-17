const solution = require("./solution.js");

test("8 characters long - correct string", () => {
  const str = '{[()()]}'
  expect(solution(str)).toBe(1);
});

test("6 characters long - wrong string", () => {
  const str = '([)()]'
  expect(solution(str)).toBe(0);
});

test("200 characters long - correct string", () => {
  const str = "(".repeat(100) + ")".repeat(100);
  expect(solution(str)).toBe(1);
});

test("60,000 characters long - correct string", () => {
  const str = "([{".repeat(10000) + "}])".repeat(10000);
  expect(solution(str)).toBe(1);
});

test("120,002 characters long - wrong string", () => {
  const str = '{' + "([{".repeat(20000) + "}])".repeat(20000) + ']';
  expect(solution(str)).toBe(0);
});
