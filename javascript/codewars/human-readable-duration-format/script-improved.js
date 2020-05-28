// Human readable duration format
// https://www.codewars.com/kata/52742f58faf5485cae000b9a

const test0 = 0
const test1 = 161
const test2 = 120
const test3 = 3600
const test4 = 3662
const test5 = 362313541

console.time('test')
    // console.log(formatDuration(test0))
    // console.log(formatDuration(test1))
    // console.log(formatDuration(test2))
    // console.log(formatDuration(test2))
    // console.log(formatDuration(test4))
    console.log(formatDuration(test5))
console.timeEnd('test')

function formatDuration(seconds) {
    if(!seconds) return 'now'
    const resArr = []
    
    const time = {
        year: 3600 * 24 * 365,
        day: 3600 * 24,
        hour: 3600,
        minute: 60,
        second: 1,
    }

    for(const el in time) {
        const count = Math.floor(seconds / time[el])
        
        if(count) {
            seconds -= count * time[el]
            const before = !resArr.length ? '' : seconds ? `, ` : ` and `
            const ending = count === 1 ? '' : 's'
            const text = `${before}${count} ${el}${ending}`
            resArr.push(text)
        }
    }
    
    return resArr.join('')
}