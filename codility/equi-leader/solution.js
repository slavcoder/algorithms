function solution(arr) {
    const count = {}
    let res = 0

    arr.forEach((el, index) => {
        count[el] = count[el] ? count[el] + 1 : 1

        for(key in count) {
            const halfLength = index + 1 / 2

            if(count[key] > halfLength) {
                
            }

            console.log(key)
        }
    })

    return res
}

module.exports = solution
