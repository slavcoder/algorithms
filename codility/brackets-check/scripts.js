// done - 100%

// const test = "[[{}((([])))]";
// const test = "[[}}[]]{{]";
// const test = "[))]";
// const test = "[[[{{{{]]]}}}()";
// const test = "[{}]";
// const test = "{[()()]}";
// const test = "[(][{{{{{{}}}}}}]";
// const test = "}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}{{{{{{{{}}}}}()()()()".repeat(10);
// const test = "{}()[]{{{{{{{}}}}}}}}";
// const test = "[[[[[[[[[[[[[[[[[[[[[[[[[[((((((({{{{{{{{{{{{}}}}}}}}}}}})))))))]]]]]]]]]]]]]]]]]]]]]]]]]])".repeat(1000);

// const test = "(".repeat(99999) + ")".repeat(100000);
const test =  '([)()])';
// const test =  '(){}[]';
// console.log('test: ' +test);
// const test =  '';
// const test = "(".repeat(100) + ")".repeat(100);

console.log(solution(test));

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