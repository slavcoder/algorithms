// Human readable duration format
// https://www.codewars.com/kata/52742f58faf5485cae000b9a

const test1 = 161
const test2 = 120
const test3 = 3600
const test4 = 3662
const test5 = 362313551

console.log(formatDuration(test1))
// console.log(formatDuration(test2))
// console.log(formatDuration(test2))
// console.log(formatDuration(test4))
// console.log(formatDuration(test5))

function formatDuration(seconds) {
    const resArr = []
    
    const time = {
        year: [3600 * 24 * 365, 0],
        day: [3600 * 24, 365],
        hour: [3600, 24],
        minute: [60, 60],
        second: [1, 60],
    }

    Object.keys(time).forEach(el => {
        let count = time[el][1] ? 
                    (seconds / time[el][0]) % time[el][1] :
                    seconds / time[el][0]

        count = Math.floor(count)

        if(count) {
            const ending = count === 1 ? '' : 's'
            const text = `${count} ${el}${ending}`
            resArr.push(text)
        }
    })

    for(let i=0 ; i < resArr.length-1; i++) {
        resArr[i] += i === resArr.length-2 ? ' and ' : ', '
    }
    
    return resArr.length ? resArr.join('') : 'now'
}