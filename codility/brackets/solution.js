function solution(S) {
    const sLength = S.length
    const stack = []
    if(sLength) stack.push(S[0])
    let lastInStack = S[0]
    
    for(let i=1; i<sLength; i++) {
        if(isOpen(S[i])) {
            stack.push(S[i])
            lastInStack = S[i]
        }
        else if(getOpen(S[i]) == lastInStack) {
            stack.pop()
            lastInStack = stack[stack.length-1]
        }
        else {
            return 0
        }
    }

    return stack.length ? 0 : 1
    
    function getOpen(close) {
        switch (close) {
            case '}':
                return '{'
            case ']':
                return '['
            case ')':
                return '('
        }
    }

    function isOpen(el) {
        return (el == '{' || el == '(' || el == '[') ? true : false
    }
}

module.exports = solution