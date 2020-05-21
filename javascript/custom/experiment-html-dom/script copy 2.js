const resultBox = document.querySelector('.result')

const menu = [
    ['ul'],
        ['li'],['a', {href:'#'}],['text', `menu item 1`],['/a'],['/li'],
        ['li'],['a', {href:'#'}],['text', `menu item 2`],['/a'],['/li'],
        ['li'],['a', {href:'#'}],['text', `menu item 3`],['/a'],['/li'],
        ['li'],['a', {href:'https://google.com'}],['text', `google`],['/a'],['/li'],
    ['/ul']
]

const styles = {
    container: `
        background-color: red;
        color: blue;
        text-align: center;
    `
}

const test1 = [
    ['div', {lawa: 'container', class: 'container', style: styles.container}],
        ['h1', {lawa: 'heading', class:'heading'}],
            ['text', `just test 1`],
            ['span', {class: 'heading_span'}],['text', ` span text `],['/span'],
            ['text', `other text inside header`],
        ['/h1'],
        ['nav'],
            ['button', {class:'button -active', id: 'button'}],
                ['text', `toggle menu`],
            ['/button'],
            ... menu,
        ['/nav'],
        ['div', {lawa: 'insert'}],['/div'],
    ['/div']
]

const insertion = [
    ['p'],['text','inserted element'],['/p']
]

let res1 = ''

console.time('test1-foreach')
// for(let i=0; i<2; i++) {
    test1.forEach((el,index,arr) => {
        if(el[0][0] != '/'){
            if(el[0] == 'text') {
                res1 += el[1]
            }
            else {
                let attributes = ''
                if(el[1]) {
                    const attrKeys = Object.keys(el[1])
                    attrKeys.forEach(attr => { 
                        const attrName = attr == 'lawa' ? 'data-lawa' : attr 
                        attributes += ` ${attrName}="${el[1][attr]}"`
                        if(attr == 'lawa' && el[1][attr] == 'insert') {
                            console.log('insertion')
                            arr.splice(index+1, 0, ... insertion)
                        }
                    })
                }

                res1 += `<${el[0]}${attributes}>`
            }
        }
        else {
            res1 += `<${el[0]}>`
        }
    })
// }

console.timeEnd('test1-foreach')


findParents(test1)



function findParents(arr) {
    console.time('findParents')
    const parents = []
    const parentId = 0
    parents.push(parentId)
    let nextId = 1
    
    const elements = []
    arr.forEach(el => {
        if(el[1] && el[1].lawa) {
            elements.push({
                name: el[0],
                count: 1
            })
            el[1]['data-lawa-parents'] = parents
            parents.push(nextId)
            nextId++
        }
        else if(el[0][0] == '/') {
            const close = el[0].substr(1)
            console.log(close)
            elements.forEach(el => {
                if(el.name == close) {
                    console.log('closing')
                    el.count--
                    if(!el.count) {
                        el.name += '-closed'
                        parents.pop()
                    }
                }
            })
        }
    })
    console.log(elements)
    
    console.timeEnd('findParents')
}

resultBox.innerHTML = res1
console.log(test1)
console.log(res1)