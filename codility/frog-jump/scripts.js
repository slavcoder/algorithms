// finished
console.log(solution(10,85,30));

function solution(X,Y,D) {
    return (Y == X) ? 0 : Math.ceil((Y-X)/D)
}