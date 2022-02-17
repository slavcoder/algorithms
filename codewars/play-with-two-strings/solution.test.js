const solution = require("./solution.js");

test("'abc' and 'cde' should return 'abCCde'", () => {
  expect(solution('abc', 'cde')).toBe('abCCde');
});

test("'ab' and 'aba' should return 'aBABA'", () => {
  expect(solution('ab', 'aba')).toBe('aBABA');
});

test("'abab' and 'bababa' should return 'ABABbababa'", () => {
  expect(solution('abab', 'bababa')).toBe('ABABbababa');
});
