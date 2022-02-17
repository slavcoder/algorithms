const solution = require("./solution.js");

test("array 6 length", () => {
  const arr = [1, 3, 6, 4, 1, 2]
  expect(solution(arr)).toBe(5);
});

test("array 3 length", () => {
  const arr = [1, 2, 3]
  expect(solution(arr)).toBe(4);
});

test("array 2 length negatives", () => {
  const arr = [-1, -3]
  expect(solution(arr)).toBe(1);
});

test("empty array", () => {
  const arr = []
  expect(solution(arr)).toBe(1);
});

test("simple array 1000 length with 0 - its length numbers", () => {
  const arr = []

  for (let i = 0; i < 1e3; i++) {
    arr.push(i)
  }

  expect(solution(arr)).toBe(1000);
});

test("simple array 10 length with 0 - its length numbers", () => {
  const arr = []

  for (let i = 0; i < 10; i++) {
    arr.push(i)
  }

  expect(solution(arr)).toBe(10);
});

test("simple array 100 000 length with 0 - its length numbers", () => {
  const arr = []

  for (let i = 0; i < 1e5; i++) {
    arr.push(i)
  }

  expect(solution(arr)).toBe(100000);
});
