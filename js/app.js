console.log('Js Loaded')

/*----- constants -----*/
const cards = {
    0: "./images/wizard.png",
    1: "./images/dragon.png",
    2: "./images/knight.jpeg",
    3: "./images/goblin.jpeg",
    4: "./images/princess.jpeg",
    5: "./images/dwarf.png",
    6: "./images/troll.jpeg",
    7: "./images/castle.png"
}

const colors = {
    Visible: "white",
    Hidden: "lightgreen"
}

/*----- state variables -----*/
let board
let time

/*----- cached elements  -----*/
const boardEl = document.getElementById('board')
const tileEls = [...document.querySelectorAll('#board > div')]
const timerEl = document.querySelector('#timer > p')
const startBtn = document.getElementById('start')
const restartBtn = document.getElementById('restart')
const headerEl = document.querySelector('header')

/*----- event listeners -----*/

startBtn.addEventListener('click', function () {
    setInterval(function () {
        if (timeSec < 0) {
            timeMin--
            timeSec = 59
        } else if (timeSec <= 9) {
            timeSec = "0" + timeSec
        }
        if (timerEl.innerHTML === "0:00") {
            console.log('timer done')
            return
        }
        timerEl.innerHTML = `${timeMin}:${timeSec}`
        timeSec--
        checkWin()
    }, 1000)
    startBtn.style.visibility = "hidden"
    headerEl.innerHTML = '<strong>Game on!</strong>'
})

restartBtn.addEventListener('click', function () {
    init()
    startBtn.style.visibility = "visible"
    timerEl.innerText = "10:00"
    headerEl.innerHTML = 'Memory Game'
})

boardEl.addEventListener('click', handleFirstClick)

// Test handler for individual tiles - no event delegation
// tileEls.forEach(tileEl => {
//     tileEl.addEventListener('click', function (evt) {
//         // console.log(evt.target)
//         evt.target.style.opacity = '1'
//     })
// })

/*----- functions -----*/
function init() {
    console.log('Initializing game')

    board = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7]

    timeMin = 0

    timeSec = 5

    render()
}

function render() {
    console.log('Rendering game')

    // shuffleBoard(board)
    renderBoard()
    // checkMatch()
    // renderMessage()

    // console.log(checkMatch())
}

// This utilizes the Fisher-Yates shuffle algorithm - provide citation
function shuffleBoard(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function renderBoard() {
    console.log('Rendering board')

    board.forEach((arr, idx) => {
        const tileId = idx
        const tileEl = document.getElementById(tileId)
        tileEl.innerHTML = `<img src="${cards[arr]}">`
    })
}

function handleFirstClick(evt) {
    if (evt.target.className !== 'clicked') {
        console.log('Element has been clicked')
        evt.target.setAttribute('class', 'clicked')
        evt.target.style.opacity = '1'
    } else {
        console.log('Element is clicked')
        evt.target.style.opacity = '0'
        evt.target.removeAttribute('class')
    }
}

function checkMatch() {
    if (board[0] === board[1]) {
        return true
    } else {
        return false
    }
}

function checkWin() {
    if (timerEl.innerHTML === '0:00') {
        headerEl.innerHTML = '<strong>You lose!</strong>'
    }
}

// function renderMessage() {}

init()