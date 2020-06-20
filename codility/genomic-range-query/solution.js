function solution(s,p,q) {
    sValues = s.replace(/A/g, '1')
               .replace(/C/g, '2')
               .replace(/G/g, '3')
               .replace(/T/g, '4')

    arrLength = p.length
    res = []
    
    for(let i=0; i<arrLength; i++) {
        let substring = sValues.substring(p[i], q[i]+1)

        for(let j=1;j<=4;j++) {
            if(substring.indexOf(j) != -1) {
                res.push(j)
                j=5
            }
        }
    }

    return res
}

module.exports = solution