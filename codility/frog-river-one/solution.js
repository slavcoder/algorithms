function solution(x, arr) {
    const leaves = new Set()
    const arrLength = arr.length

    for(let i = 0; i < arrLength; i++) {
        leaves.add(arr[i])
        if(leaves.size === x) return i
    }

    return -1
}

module.exports = solution