// finished

// console.log(solution(10000000));
console.log(solution(561892));
// console.log(solution(121));

function solution(N) {
    let res = N.toString(2)
    const resLength = res.length
    const lastIndex = (res.charAt(resLength-1) == 1) ? resLength : -1

    return res.split('1')
              .slice(0,lastIndex)
              .sort()
              .reverse()[0]
              .length
}