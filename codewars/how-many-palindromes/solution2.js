function solution(s) {
    let res = 0
    const sLength = s.length
    const sReversed = s.split('').reverse().join('')

    for(let i = 0; i < sLength; i++) {
        res += i+1

        for(let j = i+1; j < sLength; j++) {
            if(s[i] !== s[j]) {
                res--
            }
            else {
                const s1 = s.substring(i,j)
                const s2 = sReversed.substring(sLength-i-1,sLength-j-1)
                if(s1 !== s2) res--
            }
        }
    }
 
    return res
}

module.exports = solution