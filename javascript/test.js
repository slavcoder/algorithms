// custom class for simple tests

class Test {
    constructor(func) {
        this.func = func
        this.cases = []
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
            const res = this.func(...el.case)
            console.timeEnd('time')

            if(Array.isArray(res)) {
                passed = this.arraysEqual(res, el.result)
                if(!passed) {
                    console.log('expected: ', el.result)
                    console.log('got: ', res)
                }
            }
            else {
                passed = res === el.result
                console.assert(passed, `expected: ${el.result}, got: ${res}`)
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