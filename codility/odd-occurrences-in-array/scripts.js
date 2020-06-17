// console.log(solution(10000000));
console.log(solution([9,3,9,3,9,7,9,7,1]));
console.log(solution([9,3,9,3,9,7,9]));
console.log(solution([2,1,1,1,1,1,1]));
console.log(solution([2,2,5]));
// console.log(solution(121));

function solution(A) {
    const arr = A.sort()
    const arrLength = arr.length
    let count = 0
    let current = arr[0]

    for(let i=0; i<arrLength; i++) {
        if(arr[i] == current) {
            count++
        }
        else {
            
            if(count % 2 != 0) {
                return arr[i-1]
            }

            count = 1
            current = arr[i]
        }
    }
    return current
}