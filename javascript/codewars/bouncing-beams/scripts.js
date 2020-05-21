// finished
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
    }

    const nextStep = []
    const boardLength = board.length

    for(let i = 0; i< boardLength; i++){
        const rowLength = board[i].length

        for(let j = 0; j < rowLength; j++){
            if(board[i][j] === '*') {
                setPosition(i,j)
                setNextStep(i,j)
                break;
            }
        }
    }

    while(true) {
        laser.position[0] += nextStep[0]
        laser.position[1] += nextStep[1]
        
        const boardChar = board[laser.position[0]][laser.position[1]]
        if(boardChar === '#') break
        
        if(boardChar === '/' || boardChar === '\\') {
            const x = nextStep[0]
            const y = nextStep[1]
            const changeNumber = boardChar === '/' ? -1 : 1
            
            nextStep[0] = y * changeNumber
            nextStep[1] = x * changeNumber
        }

        laser.distance++
    }

    return {
        position: [laser.position[1], laser.position[0]],
        distance: laser.distance
    }

    function setPosition(x,y) {
        laser.position[0] = x
        laser.position[1] = y
    }

    function setNextStep(x,y) {
        let direction = x === 0 ? 'bottom' : 
                        x === boardLength - 1 ? 'top' : 
                        y === 0 ? 'right' : 'left'

        const steps = {
            top: [-1, 0],
            bottom: [1, 0],
            left: [0, -1],
            right: [0, 1],
        }

        nextStep[0] = steps[direction][0]
        nextStep[1] = steps[direction][1]
    }
}