// finished
// https://www.codewars.com/kata/585894545a8a07255e0002f1

const test0 = ['A', 0]; // 0
const test1 = ['A', 10]; // 0
const test2 = ['B', 1]; // 1
const test3 = ['C', 2]; // 5
const test4 = ['D', 3]; // 37
const test5 = ['E', 4]; // 256
const test6 = ['E', 8]; // 23280

// console.log(countPatternsFrom(test3[0], test3[1]))
// console.log(countPatternsFrom(test1[0], test1[1]))
// console.log(countPatternsFrom(test2[0], test2[1]))
// console.log(countPatternsFrom(test3[0], test3[1]))
// console.log(countPatternsFrom(test4[0], test4[1]))
// console.log(countPatternsFrom(test5[0], test5[1]))
console.log(countPatternsFrom(test6[0], test6[1]))

function countPatternsFrom(firstPoint, length) {
    if(!length || length > 9) return 0

    let arr = [firstPoint]
    let res = 1

    const possibilities = {
        A: ['B', 'D', 'E', 'F', 'H'],
        B: ['A', 'C', 'D', 'E', 'F', 'G', 'I'],
        C: ['B', 'D', 'E', 'F', 'H'],
        D: ['A', 'B', 'C', 'E', 'G', 'H', 'I'],
        E: ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I'],
        F: ['A', 'B', 'C', 'E', 'G', 'H', 'I'],
        G: ['B', 'D', 'E', 'F', 'H'],
        H: ['A', 'C', 'D', 'E', 'F', 'G', 'I'],
        I: ['B', 'D', 'E', 'F', 'H']
    }

    for(let i = 0; i < length-1; i++) {
        console.log(res)
        arr = calculate(arr, i)
    }

    function calculate(arr, used) {
        let tempArr = []
        arr.forEach(el => {
            res += Math.max(possibilities[el].length - used, 1)
            tempArr = [...tempArr, ...possibilities[el]]
        })

        return tempArr
    }

    return res
}