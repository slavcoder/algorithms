function solution(n,col){
    const arr = []
    const max = n*n
    let currentMax = 0
    console.log(max)
    
    while(currentMax < max) {
        for(let i=0; i<=n ;i++) {
            if(currentMax > n) {
                arr[i] += i
            }
            else {
                arr[i] = i+1
            }
        }
        currentMax++
    }
    
    console.log(currentMax)

    return arr
}

module.exports = solution