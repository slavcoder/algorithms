# Missing integer

## Codility task
[link](https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/)

## Steps:

1. Filter values lower than 1
2. Remove duplicates using `Set` and sort in new `Array`
3. Iterate through this array, if the current index number increased by 1 is different than a number on at this index, return index number increased by 1.
4. Return one at the end (in case the array is empty)

## Test

Use the following command to run tests for this algorithm:

```
npm test /codility/missing-integer
```