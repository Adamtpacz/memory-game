console.log('Js Loaded')

/*----- constants -----*/
const cards = {
    0: "Wizard",
    1: "Dragon",
    2: "Knight",
    3: "Goblin",
    4: "Princess",
    5: "Dwarf",
    6: "Troll",
    7: "Castle"
}

const images = {
    Wizard: "./images/wizard.png",
    Dragon: "./images/dragon.png",
    Knight: "./images/knight.jpeg",
    Goblin: "./images/goblin.jpeg",
    Princess: "./images/princess.jpeg",
    Dwarf: "./images/dwarf.png",
    Troll: "./images/troll.jpeg",
    Castle: "./images/castle.png"
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
    renderTimer()
}

function renderBoard() {
    console.log('Rendering board')

    board.forEach((colArr, colIdx) => {
        colArr.forEach((tileVal, rowIdx) => {
            const tileId = `c${colIdx}r${rowIdx}`
            const tileEl = document.getElementById(tileId)
            tileEl.innerHTML = cards[tileVal]
        })
    })
}

function tile() {
    return Math.floor((Math.random() * 8))
}

function renderTimer() {
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
}

init()