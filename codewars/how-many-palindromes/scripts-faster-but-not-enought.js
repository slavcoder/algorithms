// How many palindromes can you find (performance)
// not finished
// https://www.codewars.com/kata/58456ab6fc7d0f019b000123

const test1 = 'abccba'
const test2 = 'pellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturmporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturmporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturmporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturmporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturmporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturmporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequ'
const test3 = 'abcabccbacabccbababccbaaabccbaepturitemporeaccusepturitemporeaccusantepturitemporeaccusantiumassumeiumassumeantiumassume'
const test4 = 'feetea'

console.time('test time')
console.log(howManyPalindromes(test2))
console.timeEnd('test time')

function howManyPalindromes(s) {
    let res = 0
    const sLength = s.length
    const sReversed = s.split('').reverse().join('')
    // let count = 0

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

            // let start = i+1
            // let end = j-1
            // let palindrome = true
            
            // while(end > start && palindrome) {
            //     if(s[start] !== s[end]) {
            //         palindrome = false
            //         res--
            //         count++
            //     }

            //     start++
            //     end--
            // }
        }
    }
 
    // console.log(count)
    return res
}