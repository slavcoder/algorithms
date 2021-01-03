function solution(arr) {
    let sum = arr.reduce((sum, item) => sum + item, 0)
    sum -= arr.shift()
    sum -= arr.pop()
    
    let arrLength = arr.length
    let res = 0

    while(arrLength > 3) {
        let min = Math.min(...arr)
        res = Math.max(res, sum-min)

        if(arr[0] <= arr[arrLength-1]) {
            sum -= arr.shift()
        }
        else {
            sum -= arr.pop()
        }

        arrLength--
    }

    return res
}

module.exports = solution
