const resultBox = document.querySelector('.result')
let id = 0

const test = `<div data-lawa="testContainer">
                    <div id="textId" data-lawa="testContainer" class="yolo">
                        <h2 data-lawa="heading">This is default <i data-lawa="author"></i> heading text</h2>
                        <button data-lawa="button">button</button>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                        <div data-lawa="test2"></div>
                        <div><p><span data-lawa="insideSpan"></span></p></div>
                        <div><p><span data-lawa="insideSpan"></span></p></div>
                    </div>
                  </div>`.repeat(1)

console.time('split')
const res = test.split(' ')
console.timeEnd('split')

console.time('join')
const res2 = res.join(' ')
console.timeEnd('join')


const test4 = [
    ['div :testContainer .main__container .main__container--large .blablaClass .-active #loremId', {
        'data-x': 'whazupX',
        'data-Y': 'whazupY',
        style: {
            'text-align': 'center'
        }
    }],
        ['div :testContainer'],
            ['h2 :heading'],['text', `This is default`],['i :author'],['/i'],['text', 'heading text'],['/h2'],
            ['button .button'],['text', `button`],['/button'],
        ['/div'],
        ['p'],['text', `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.`],['/p'],
        ['div :test2'],['/div'],
        ['div'],
            ['div'],
                ['p .paragraph'],['span :insideSpan'],['/span'],['/p'],
                ['p .paragraph'],['span :insideSpan'],['/span'],['/p'],
            ['/div'],
        ['/div'],
        ['form :form'],
            ['input :name .inputName', {type: 'text', placeholder: 'John Doe...', required: 'true'}],
        ['/form'],
    ['/div'],
    ['pre'],
        ['text', `
this is pre text
    and its format is like this
or any other
        `],
    ['/pre'],
]

const test5 = [
    ['main main'],
        ['div testContainer', {
            class: 'main__container main__container--large blablaClass -active',
            id: 'loremId',
            'data-x': 'whazupX',
            'data-Y': 'whazupY',
            style: {
                'text-align': 'center'
            }
        }],
            ['div testContainer'],
                ['h2 heading'],['text', `This is default`],['i author'],['/i'],['text', `heading text`],['/h2'],
                ['button', {class: 'button'}],['text', `button`],['/button'],
            ['/div'],
            ['p'],['text', `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.`],['/p'],
            ['div test2'],
                ['img image', {class: 'page__image page__image--active', src: 'source/to/image.png'}],
            ['/div'],
            
            ['div'],
                ['p'],
                    ['text', `
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate hic, nesciunt nihil harum maiores sit recusandae accusamus totam ipsam atque minima magni minus porro fugiat nostrum aliquam quidem! Quas adipisci sapiente ut similique quis, nam a aliquid debitis aliquam unde laboriosam deserunt officiis ex ipsam accusamus ipsa, quibusdam dolorem impedit.
                    `],
                ['/p'],
                ['div'],
                    ['p', {class: 'paragraph'}],['span insideSpan'],['/span'],['/p'],
                    ['p', {class: 'paragraph'}],['span insideSpan'],['/span'],['/p'],
                    ['temp thirdParagraph'],['/temp'],
                ['/div'],
            ['/div'],

            ['form form', {class: 'form'}],
                ['label', {for:'input'}],
                    ['input name', 
                    {
                        id: 'input', 
                        class: 'inputName', 
                        type: 'text', 
                        placeholder: 'John Doe...', 
                        required: 'true'
                    }],
                ['/label'],
            ['/form'],
        ['/div'],
    ['/main']
]

console.time('test4')
let count = 0
test5.forEach(el => {
    if(el[0][0] != '/'){
        count++
        // el[0]+=' [c]'
    }
})
console.log(count)
console.timeEnd('test4')



// console.log(res)
// console.log(res2)
console.log(test5)