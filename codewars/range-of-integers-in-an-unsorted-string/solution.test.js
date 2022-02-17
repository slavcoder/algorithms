const solution = require("./solution.js");

test("test 1", () => {
  const str = '1568141291110137'
  expect(solution(str, 10)).toStrictEqual([6, 15]);
});

test("test 2", () => {
  const str = '6291211413114538107'
  expect(solution(str, 14)).toStrictEqual([1, 14]);
});

test("test 3", () => {
  const str = '13161820142119101112917232215'
  expect(solution(str, 15)).toStrictEqual([9, 23]);
});

test("test 4", () => {
  const str = '10610211511099104113100116105103101111114107108112109'
  expect(solution(str, 18)).toStrictEqual([99, 116]);
});
