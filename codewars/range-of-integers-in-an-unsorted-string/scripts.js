// not finished - 92 testy przechodzi 30 oblewa

let inputString = '1568141291110137' // 6-15
// let inputString = '6291211413114538107' // 1-14
// let inputString = '13161820142119101112917232215' // 9-23
// let inputString = '10610211511099104113100116105103101111114107108112109' // 99-116

console.log(mysteryRange(inputString, 10))
// console.log(mysteryRange(inputString, 14))
// console.log(mysteryRange(inputString, 15))
// console.log(mysteryRange(inputString, 18))

function mysteryRange(s,n){
    const arr = []
    let i = 0, j = 0

    while(true) {
        if(s.indexOf(i) != -1) {
            arr.push(i)
            if( j >= n && arr[j]-n+1 == arr[j-n+1] ){
                const testS = arr.slice(j-n+1, j+1).join('')
                if(sortString(s) == sortString(testS)) {
                    return [arr[j-n+1], arr[j]]
                }
            }
            j++
        }
        i++
    }

    function sortString(string) {
        return string.split('').sort().join('')
    }
}