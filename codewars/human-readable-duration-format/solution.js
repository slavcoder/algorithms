function solution(seconds) {
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

module.exports = solution