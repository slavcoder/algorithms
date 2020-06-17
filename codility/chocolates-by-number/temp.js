console.log(solution(24,18))
console.log(solution(10,4))
// console.log(solution(11,3))
// console.log(solution(10,100))

function solution(n,m) {
    const arr = []
    let eaten = 0

    function eat(startAt, gaps) {
        for(let i = startAt; i < n; i += gaps) {
            if(arr[i] == 0) {
                return eaten
            }
            else {
                eaten++
                arr[i] = 0
            }

            if(i + gaps >= n) {
            // if((i + gaps) % n) {
                const nextStartAt =  n - i
                // const nextStartAt =  i % n
                console.log('next: ' + nextStartAt)
                eat(nextStartAt,m)
            }
        }
    }
    console.log(arr)

    eat(0,m)
    return eaten
}