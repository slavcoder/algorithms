function solution(arr) {
    arr = arr.filter(el => el >= 0).sort((a,b) => b-a)
    const arrLength = arr.length

    for (let i=0; i < arrLength-2; i++) {
        if(arr[i+1] + arr[i+2] > arr[i]) return 1
    }

    return 0
}

module.exports = solution