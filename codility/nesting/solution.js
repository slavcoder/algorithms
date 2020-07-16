function solution(S) {
    let res = 0;
    const arr = [...S];
    const arrLength = arr.length

    for (let i = 0; i < arrLength; i++) {
        res += arr[i] === "(" ? 1 : -1;
        if(res < 0) return 0
    }

    return res === 0 ? 1 : 0;
}

module.exports = solution;
