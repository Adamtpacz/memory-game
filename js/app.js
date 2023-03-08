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
let pairs // potentially same as 'board'
let time
let guesses

/*----- cached elements  -----*/
const boardEls = [...document.querySelectorAll('#board > div')]
const timerEl = document.querySelector('#timer > p')
const counterEl = document.querySelector('#counter > p')
const startBtn = document.getElementById('start')
const restartBtn = document.getElementById('restart')

/*----- event listeners -----*/

startBtn.addEventListener('click', function() {
    setInterval(function() {
        if (timeSec < 0) {
            timeMin--
            timeSec = 59
        } else if (timeSec <= 9) {
            timeSec = "0" + timeSec
        }
        if (timerEl.innerHTML === "0:00") {
            return
        }
        timerEl.innerHTML = `${timeMin}:${timeSec}`
        timeSec--
    }, 1000)
    startBtn.style.visibility = "hidden"
})

restartBtn.addEventListener('click', function() {
    init()
})

/*----- functions -----*/
function init() {
    console.log('Initializing game')

    // Initial board state
    // board = [
    //     [null, null, null, null], // Column 0
    //     [null, null, null, null], // Column 0
    //     [null, null, null, null], // Column 0
    //     [null, null, null, null], // Column 0
        
    // ]

    board = [
        [tile(), tile(), tile(), tile()], // Column 0
        [tile(), tile(), tile(), tile()], // Column 1
        [tile(), tile(), tile(), tile()], // Column 2
        [tile(), tile(), tile(), tile()], // Column 3
    ]

    // Randomized pairs
    pairs = null

    // Allowed time in minutes and seconds
    timeMin = 10
    timeSec = 0

    // Allowed guesses
    guesses = 24

    render()
}

function render() {
    console.log('Rendering game')

    renderBoard()
}

function renderBoard() {
    console.log('Rendering board')

    board.forEach((colArr, colIdx) => {
        colArr.forEach((tileVal, rowIdx) => {
            const tileId = `c${colIdx}r${rowIdx}`
            const tileEl = document.getElementById(tileId)
            // tileEl.innerHTML = cards[tileVal]
            tileEl.innerHTML = `<img src="${cards[tileVal]}">`
        })
    })



}

function tile() {
    return Math.floor((Math.random() * 8))
}

init()