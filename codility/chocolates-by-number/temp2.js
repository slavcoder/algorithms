console.log(solution(10,4))

function solution(n,m) {
    const arr = []
    let eaten = 0;
    let lastEaten = '';

    function eat(startAt, gaps, create) {
        for(let i = startAt; i < n; i++) {
            console.log('startAt: ' + startAt)
            
            if(create) {
                arr.push(1)
            }

            // console.log(arr[i])
            
            if(arr[i]) {
                // console.log(arr[i])
                // console.log('eat: ' + (arr[i] - startAt))
                if((i - startAt) % gaps == 0) {
                    eaten++
                    arr[i] = 0
                    lastEaten = i
                    console.log('eaten: ' + i)
                }
            }
            else {
                return eaten
            }

            if(i == n-1) {
                console.log('gaps: ' + gaps)
                console.log('i: ' + i)
                console.log('lastEaten: ' + lastEaten)
                const nextStartAt = gaps - (i - lastEaten) -1
                console.log('nextStartAt: ' + nextStartAt)
                eat(nextStartAt,gaps,false)
                // console.log(nextStartAt,gaps,false)
            }
        }
        console.log(arr);
    }

    eat(0,m,true)
    return eaten

}