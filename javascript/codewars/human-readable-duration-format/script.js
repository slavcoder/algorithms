// Human readable duration format
// https://www.codewars.com/kata/52742f58faf5485cae000b9a

const test1 = 161
const test2 = 120
const test3 = 3600
const test4 = 3662
const test5 = 362313541

// console.log(formatDuration(test1))
// console.log(formatDuration(test2))
// console.log(formatDuration(test2))
// console.log(formatDuration(test4))
console.log(formatDuration(test5))

function formatDuration(seconds) {
    const resArr = []
    
    const time = {
        year: 3600 * 24 * 365,
        day: 3600 * 24,
        hour: 3600,
        minute: 60,
        second: 1,
    }

    Object.keys(time).forEach(el => {
        const count = Math.floor(seconds / time[el])
        
        if(count) {
            seconds -= count * time[el]
            const before = !resArr.length ? '' : seconds ? `, ` : ` and `
            const ending = count === 1 ? '' : 's'
            const text = `${before}${count} ${el}${ending}`
            resArr.push(text)
        }
    })
    
    return resArr.length ? resArr.join('') : 'now'
}