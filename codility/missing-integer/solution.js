function solution(arr) {
    const arrFiltered = arr.filter(el => el > 0)
    const arrNoDuplicates = [...new Set(arrFiltered)].sort((a,b) => a-b)
    const arrLength = arrNoDuplicates.length

    for(let i = 0; i <= arrLength; i++) {
        if(arrNoDuplicates[i] != i+1) return i+1
    }

    return 1
}

module.exports = solution