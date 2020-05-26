// How many palindromes can you find (performance)
// not finished
// https://www.codewars.com/kata/58456ab6fc7d0f019b000123

const test0 = 'abc'
const test1 = 'abccba'
const test2 = 'pellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturmporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturmporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturmporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturmporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturmporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturmporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequ'
const test3 = 'abcabccbacabccbababccbaaabccbaepturitemporeaccusepturitemporeaccusantepturitemporeaccusantiumassumeiumassumeantiumassume'
const test4 = 'aaabfjfbaskex'

console.time('test time')
console.log(howManyPalindromes(test2))
console.timeEnd('test time')

function howManyPalindromes(s) {
    let res = 0
    const sLength = s.length

    for(let i = 0; i < sLength; i++) {
        for(let j = i+2; j < sLength; j++) {
            if(s[i] === s[j]) {
                let start = i+1
                let end = j-1
                let palindrome = true
                
                while(end >= start && palindrome) {
                    if(s[start] !== s[end]) {
                        palindrome = false
                    }
                    start++
                    end--
                }

                if(palindrome) res++
            }
        }
    }

    return res
}