function solution(H) {
    let count = 0
    const stack = [H[0]]

    H.forEach(el => {
        while(el < stack[stack.length-1]) {
            stack.pop()
            count++
        }
        if (el != stack[stack.length-1]) {
            stack.push(el)
        }

    })
    
    return count + stack.length
}

module.exports = solution
