// initializing all needed varialbles 
const box  = document.querySelectorAll('.box')
const reset = document.querySelector('#resetBtn')
const xscore = document.querySelector('#xscore')
const oscore = document.querySelector('#oscore')

// starting letter for game and score trackers
let 
    turn = 'X',
    x = 0,
    o = 0


// setting up an onclick event listener for all boxes inside game container
box.forEach(cell => {
    cell.onclick = () => {
        // the first time each cell is clicked, either x or o is placed inside cell dependent on 'turn' value
        if (cell.innerText == '') {
            cell.innerText = turn
            turn == 'X' ? turn = 'O' : turn = 'X'
            // winner function is called after every click to check for winning combo
            winner();
        }
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
        // if current index at 0,1 and 2 are the same, game has been won
        if(box[combo[0]].innerText === box[combo[1]].innerText && box[combo[1]].innerText === box[combo[2]].innerText && box[combo[0]].innerText !== '') {
            // alerts the winner 
            alert(box[combo[0]].innerText + ' has won this round!')
            // increments score card dependent on what letter won the game
            box[combo[0]].innerText == 'X' ? x++ : o++;
        }
        // increments the scores after a winning round
        xscore.innerText = x
        oscore.innerText = o
    })

    // onclick event for reset button that calls the resetGame function
    reset.onclick = () => resetGame()

    // function clears the inner text for all cells and enables the start of a new round of play
    // reinitializes turn to be X
    function resetGame() {
        box.forEach(element => element.innerText = '' )
        turn = 'X'
    }

}

// Refactor in OOP
// add style/shade to a cell after its been clicked 
// after game is won, no other cell should be click-able
// add button to reset score
// ask for user input for names and display names instead of X and O

