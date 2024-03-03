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
    }
})