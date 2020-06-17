// correct but too slow
// https://app.codility.com/programmers/lessons/6-sorting/number_of_disc_intersections/

const test1 = [1,5,2,1,4,0] // 11

console.log(solution(test1))
// console.log(solution(test2))

function solution(arr) {
    const discs = []
    let res = 0

    arr.forEach((el, i) => {
        const start = i-el
        
        discs.forEach(disc => {
            if(start <= disc) {
                res++
            }
        })

        discs.push(i+el)
    })

    return res
}