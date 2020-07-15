# Triangle

## Codility task
[link](https://app.codility.com/programmers/lessons/6-sorting/triangle/)

## Notes 

Description in Codility might be incorrect. 

> A triplet (P, Q, R) is triangular if `0 ≤ P < Q < R < N`

The above part seems to be wrong since if we remove all duplicates to avoid situation that `P ≤ Q` (for instance when we get an array such as `[5,2,2]`) the output is wrong (not same as expected). But if we leave duplicates all tests pass. In my opinion this condition should look more like this:

> A triplet (P, Q, R) is triangular if `0 ≤ P ≤ Q ≤ R`

## Test
Use the following command to run tests for this algorithm:
 
```
npm test /codility/triangle
```