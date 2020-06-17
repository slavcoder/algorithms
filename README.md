# JavaScript Algorithms 

Those are my attempts to code some algorithms in JavaScript   
Newer from top, older from bottom   
Those solutions may not be perfect or even good - I warn   

## codewars
* ### finished
    - [human-readable-duration-format](codewars/human-readable-duration-format/)
    - [bouncing-beams](codewars/bouncing-beams/) - todo: correct tests
    - [range-of-integers-in-an-unsorted-string](codewars/range-of-integers-in-an-unsorted-string/)
    - [play-with-two-strings](codewars/play-with-two-strings/)
* ### in progress
    - [screen-locking-patterns](codewars/screen-locking-patterns/)
    - [last-digit-of-a-huge-number](codewars/last-digit-of-a-huge-number/)
    - [spiral-column-addition](codewars/spiral-column-addition/)
    - [how-many-palindromes](codewars/how-many-palindromes/)

## codility
* ### finished
    - [frog-river-one](codility/frog-river-one/)
    - [tape-equilibrium](codility/tape-equilibrium/)
    - [max-product-of-three](codility/max-product-of-three/)
    - [distinct](codility/distinct/)
    - [a-binary-gap](codility/a-binary-gap/)
    - [brackets-check](codility/brackets-check/)
    - [cyclic-rotation](codility/cyclic-rotation/)
    - [fish](codility/fish/)
    - [frog-jump](codility/frog-jump/)
    - [genomic-range-query](codility/genomic-range-query/)
    - [longest-password](codility/longest-password/)
    - [mic-avg-two-slice](codility/mic-avg-two-slice/)
    - [odd-occurrences-in-array](codility/odd-occurrences-in-array/)
    - [passing-cars](codility/passing-cars/)
    - [perm-check](codility/perm-check/)
    - [perm-missing-elem](codility/perm-missing-elem/)
* ### in progress
    - [max-counters](codility/max-counters/) -> correct but too slow
    - [number-of-disc-inter-sections](codility/number-of-disc-inter-sections/)
    - [chocolates-by-number](codility/chocolates-by-number/)

## custom
   

# Testing

Each **finished** algorithm have it's own folder which contains at least 3 files: 
- `solution.js`
- `solution.test.js` 
- `README.md`

To test solution with [Jest](https://jestjs.io) use command:
```
npm test <path-to-folder>
```

For example to run tests for `human-readable-duration-format` algorithm use the following command:
```
npm test /codewars/human-readable-duration-format
```