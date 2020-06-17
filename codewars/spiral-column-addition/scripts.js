// need to figure it out - not finished

// link:
// https://www.codewars.com/kata/spiral-column-addition/javascript

console.log(spiralColumn(4, 1)) // expect 34
console.log(spiralColumn(4, 2)) // expect 40

function spiralColumn(n,col){
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