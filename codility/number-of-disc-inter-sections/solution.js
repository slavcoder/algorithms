function solution(arr) {
    const discs = []
    let res = 0

    arr.forEach((el, i) => {
        const start = i-el
        
        discs.forEach(disc => {
            if(start <= disc) {
                res++
            }
        })

        discs.push(i+el)
    })

    return res
}

module.exports = solution