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

/*----- state variables -----*/
let board
let time
let selectedCards = []
let match

/*----- cached elements  -----*/
const boardEl = document.getElementById('board')
const tileEls = [...document.querySelectorAll('#board > div')]
const timerEl = document.querySelector('#timer > p')
const startBtn = document.getElementById('start')
const restartBtn = document.getElementById('restart')
const headerEl = document.querySelector('header')

/*----- event listeners -----*/

startBtn.addEventListener('click', renderTimer)

restartBtn.addEventListener('click', restartGame)

boardEl.addEventListener('click', handleClick)

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

    timeMin = 1

    timeSec = 0

    render()
}

function render() {
    console.log('Rendering game')

    shuffleBoard(board)
    renderBoard()
    // checkMatch()

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
        const tileEl = document.getElementById(idx)
        tileEl.innerHTML = `<img src="${cards[arr]}">`
    })
}

function renderTimer() {
    const myInterval = setInterval(function () {
        if (timeSec < 0) {
            timeMin--
            timeSec = 59
        } else if (timeSec <= 9) {
            timeSec = "0" + timeSec
        }
        if (timerEl.innerHTML === "0:01") {
            console.log('timer done')
            clearInterval(myInterval)
        }
        timerEl.innerHTML = `${timeMin}:${timeSec}`
        timeSec--
        checkWin()
    }, 1000)
    startBtn.style.visibility = "hidden"
    headerEl.innerHTML = '<strong>Game on!</strong>'
}

function restartGame() {
    init()
    startBtn.style.visibility = "visible"
    timerEl.innerText = ""
    headerEl.innerHTML = 'Memory Game'
}

function handleClick(evt) {
    // if (evt.target.className !== 'clicked') {
    //     console.log('Element has been clicked')
    //     evt.target.setAttribute('class', 'clicked')
    //     console.log(evt.target)
    //     evt.target.style.opacity = '1'
    // } else {
    //     console.log('Element is clicked')
    //     evt.target.style.opacity = '0'
    //     evt.target.removeAttribute('class')
    // }

    selectedCards.push(evt.target)
    console.log(selectedCards)
    console.log(selectedCards.length)
    if (selectedCards.length === 2) {
        checkMatch()
    }
}

function checkMatch() {
    // console.log(selectedCards[0])
    // console.log(selectedCards[1])
    // console.log(selectedCards[0].getAttribute('src'))
     
    if (selectedCards[0].getAttribute('src') === selectedCards[1].getAttribute('src')) {
        console.log('Its a match!')
        selectedCards = []
        // console.log(selectedCards)
    } else {
        selectedCards = []
    }
    console.log('Checked and selectedCards array reset')
    console.log(selectedCards)
}

function checkWin() {
    if (timerEl.innerHTML === '0:00') {
        headerEl.innerHTML = '<strong>You lose!</strong>'
    }
}

init()