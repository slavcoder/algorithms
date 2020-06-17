// custom class for simple tests

class Test {
    constructor() {

    }

    run() {
        const arr = this.cases

        console.log(`-- running ${arr.length} test cases --\n`)
        let passed = true
        let passedCount = 0

        arr.forEach((el, i) => {
            console.log(`\nTEST ${i}:`)
            console.log(`--------`)
            console.time('time')
            const res = el.solution()
            console.timeEnd('time')

            if(Array.isArray(res)) {
                passed = this.arraysEqual(res, el.equals)
                if(!passed) {
                    console.log('expected: ', el.equals)
                    console.log('got: ', res)
                }
            }
            else {
                passed = res === el.equals
                console.assert(passed, `expected: ${el.equals}, got: ${res}`)
            }

            if(passed) passedCount++
            if(i === arr.length-1) console.log('\n' + `-- passed: ${passedCount}, failed: ${arr.length - passedCount} --`)
        })
    }

    arraysEqual(a,b) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length != b.length) return false;
        for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }
}

module.exports = Test