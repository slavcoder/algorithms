// finished
// https://www.codewars.com/kata/56c30ad8585d9ab99b000c54

// const a = 'abab';
// const b = 'bababa';
const a = 'abcdeFgtrzw';
const b = 'defgGgfhjkwqe';
console.log(workOnStrings(a,b))

function workOnStrings(a,b) {
    const aArr = a.split('')
    const bArr = b.split('')
    const aObj = {}
    const bObj = {}

    fill(aArr, aObj)
    fill(bArr, bObj)   
    replace(aObj, bArr)
    replace(bObj, aArr)

    function fill(arr, obj) {
        arr.forEach(el => {
            el = el.toLowerCase()
            obj[el] = obj[el] ? obj[el] + 1 : 1
        })
    }

    function replace(obj, arr) {
        arr.forEach((el, index, arr) => {
            const lowerCaseEl = el.toLowerCase()
            if(obj[lowerCaseEl] && obj[lowerCaseEl] % 2) {
                arr[index] = el === lowerCaseEl ? el.toUpperCase() : lowerCaseEl
            }
        })
    }

    return [...aArr, ...bArr].join('')
}