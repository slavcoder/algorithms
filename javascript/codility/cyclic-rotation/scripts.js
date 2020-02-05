// finished
console.log(solution([3, 8, 9, 7, 6],3));
console.log(solution([],3));

function solution(A, K) {
    const arrLength = A.length
    if(arrLength) {
        for(let i=1; i<= K;i++) {
            const el = A[arrLength-1]
            A.pop()
            A.unshift(el)
        }
    }

    return A
}