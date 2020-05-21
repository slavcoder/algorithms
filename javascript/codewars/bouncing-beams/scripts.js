// not finished
// https://www.codewars.com/kata/5cbf57a636240b0025b09396

const arr = [
    "##############",
    "#        \\   #",
    "*   \\        #",
    "#            #",
    "#   \\    /   #",
    "##############"
];

console.log(arr)
console.log(exit_from_maze(arr))

function exit_from_maze(board) {
    const laser = {
        position: [0, 0],
        distance: 0,
        direction: ''
    }

    let run = true
    const directions = ['top', 'right', 'bottom', 'left']
    const boardLength = board.length

    for(let i = 0; i< boardLength; i++){
        const rowLength = board[i].length

        for(let j = 0; j < rowLength; j++){
            if(board[i][j] === '*') {
                setPosition(i,j)
                setDirection('*')
                break;
            }
        }
    }

    function setPosition(x,y) {
        laser.position[0] = x
        laser.position[1] = y
    }

    function setDirection(sign) {
        if(sign === '*') {
            if(laser.position[0] === 0) {
                laser.direction = 'bottom'
            }
            else if(laser.position[0] === boardLength - 1) {
                laser.direction = 'top'
            }
            else if(laser.position[1] === 0) {
                laser.direction = 'right'
            }
            else {
                laser.direction = 'left'
            }
        }
        // else if(sign === '/') {
        //     laser.direction = laser.direction === 'left' ? 'top' :
        //                       laser.direction === 'right' ? 'bottom' :
        //                       laser.direction === 'bottom' ? 'bottom' :
        //                       laser.direction === 'right' ? 'bottom' :
        // }
        // else {

        // }
    }

    while(run) {
        console.log('aa')
        // if(direction && board.position[0])

        run = false
    }

    console.log(laser.direction)

    return {
        position: laser.position,
        distance: laser.distance
    }
}