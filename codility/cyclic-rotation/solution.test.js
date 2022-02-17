const solution = require("./solution.js");

test("rotate 5 elements array 3 times", () => {
  expect(solution([3, 8, 9, 7, 6], 3)).toStrictEqual([9, 7, 6, 3, 8]);
});

test("rotate 0 elements array 3 times", () => {
  expect(solution([], 3)).toStrictEqual([]);
});

test("rotate 4 elements array 4 times", () => {
  expect(solution([1, 2, 3, 4], 4)).toStrictEqual([1, 2, 3, 4]);
});
