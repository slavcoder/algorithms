// How many palindromes can you find (performance)
// not finished
// https://www.codewars.com/kata/58456ab6fc7d0f019b000123

const test1 = 'abccbaabccba'
const test2 = 'pellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturmporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturmporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturmporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturmporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturmporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturmporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequunturiureinventorealiquidvoluptatumplaceatarchitectoquoconsecteturpellatexcepturitemporeaccusantiumassumendanammaioresenimcumconsequ'

console.time('test time')
console.log(howManyPalindromes(test2))
console.timeEnd('test time')

function howManyPalindromes(s) {
    let res = 0
    const sLength = s.length

    for(let i = 0; i < sLength; i++) {
        for(let j = i; j < sLength; j++) {
            let palindrome = true
            let start = i
            let end = j
            
            while(end > start && palindrome) {
                if(s[start] !== s[end]) palindrome = false
                start++
                end--
            }
            
            if (palindrome) res++
        }
    }
    
    return res
}