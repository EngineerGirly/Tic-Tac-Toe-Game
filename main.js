// initializing all needed varialbles 
const box  = document.querySelectorAll('.box')
const reset = document.querySelector('#resetBtn')
const xscore = document.querySelector('#xscore')
const oscore = document.querySelector('#oscore')

// starting letter
let turn = 'X';

// setting up an onclick event listener for all boxes inside game container
box.forEach(cell => {
    cell.onclick = () => {
        cell.innerText = turn
        turn == 'X' ? turn = 'O' : turn = 'X'
        winner();
    }
})

function winner () {
    const winCombination = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    winCombination.forEach(combo => {
        if(box[combo[0]].innerText === box[combo[1]].innerText && box[combo[1]].innerText === box[combo[2]].innerText && box[combo[0]].innerText !== '') {
            console.log(box[combo[0]].innerText + ' won')
        }
    })

    //I am awfully close to figuring this logic out

    // start thinking of OOP build out

    // winCombination.forEach((element, index) => box[index].innerText = index)
}

