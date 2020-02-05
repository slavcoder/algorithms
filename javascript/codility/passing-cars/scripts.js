// done - 100%

console.log(solution([0,1]));
console.log(solution([0,1,0,1,1,1]));
console.log(solution([0,0,0,1,0,1,1]));
console.log(solution([0,1,0,1,1,1]));

function solution(arr) {
    const arrLength = arr.length
    let res = 0
    let carsAhead = 0
    const max = 1000000000
    let initRes = true

    if(arrLength >= 64000) {
        const halfRoad = arrLength/2
        const leftCars = halfRoad-count(0,halfRoad)
        const rightCars = count(halfRoad,arrLength)
        
        if(leftCars * rightCars > max) {
            return -1
        }
    }

    for(let i=0; i<arrLength; i++) {
        if(!arr[i] && initRes) {
            res = count(i,arrLength)
            carsAhead = res
            initRes = false
        }
        else {
            if(!arr[i]) {
                res += carsAhead
            }
            else {
                carsAhead--
            }
        }

        if(res > max) {
            return -1
        }
    }

    function count(start,end) {
        return arr.slice(start,end).reduce((a,b)=>a+b,0)
    }

    return res
}