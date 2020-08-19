# Dominator

## Codility task
[link](https://app.codility.com/programmers/lessons/8-leader/dominator/)

## Test

Use the following command to run tests for this algorithm:

```
npm test /codility/dominator
```

I used reverse test to check multiple possible results

```js
test("short array with dominator", () => {
    const arr = [3, 4, 3, 2, 3, -1, 3, 3]
    expect([1,3]).toContain(solution(arr));
});
```