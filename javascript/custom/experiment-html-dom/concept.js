
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








// best one:
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
