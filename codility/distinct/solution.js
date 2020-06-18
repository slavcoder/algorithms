function solution(arr) {
    const distinct = new Set()
    
    arr.forEach(el => {
        distinct.add(el)
    })

    return distinct.size
}

module.exports = solution