const solution = require("./solution.js");

const examples = [[1,50],[2,150],[3,300],[4,500],[5,750]]

examples.forEach(el => {
  test(`number ${el[0]}`, () => {
    expect(solution(el[0])).toBe(el[1]);
  });
})

