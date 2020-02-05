// not finished

console.log(solution(24,18))
console.log(solution(10,4))
console.log(solution(11,3))
console.log(solution(10,100))

function solution(n,m) {
    // const arr = []
    // let eaten = 0

    // eaten = 1 + Math.floor(n/m)
    // console.log(eaten);
    
    // console.log(eaten + Math.floor(1 + (n-eaten)/m))
    
    // return eaten

    let res =  Math.round(n / m)
    res = res + Math.round(res / m)
    res = res + Math.round(res / m)
    res = res + Math.round(res / m)
    res = res + Math.round(res / m)
    res = res + Math.round(res / m)

    console.log(res)

    return '^ for: ' + n+ ',' +m;
}