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
let board = []
let timeMin
let timeSec
let selectedCards = []
let matchNum

/*----- cached elements  -----*/
const boardEl = document.getElementById('board')
const timerEl = document.querySelector('#timer > p')
const startBtn = document.getElementById('start')
const restartBtn = document.getElementById('restart')
const headerEl = document.querySelector('header')

/*----- event listeners -----*/
startBtn.addEventListener('click', renderTimer)

restartBtn.addEventListener('click', restartGame)

boardEl.addEventListener('click', checkMatch)

/*----- functions -----*/
function init() {
    board = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7]

    timeMin = 1

    timeSec = 0

    matchNum = 0

    render()
}

function render() {
    shuffleBoard(board)
    renderBoard()
}

// This utilizes the Fisher-Yates shuffle algorithm - provide citation
function shuffleBoard(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function renderBoard() {
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
        timerEl.innerHTML = `${timeMin}:${timeSec}`
        timeSec--
        checkWin()
        if (timerEl.innerHTML === "0:00") {
            restartBtn.style.visibility = "visible"
            clearInterval(myInterval)
        }
        if (headerEl.innerHTML === "<strong>You win! The kingdom is saved!</strong>") {
            restartBtn.style.visibility = "visible"
            clearInterval(myInterval)
        }
    }, 1000)
    startBtn.style.visibility = "hidden"
    headerEl.innerHTML = '<strong>Match the pairs to save the kingdom!</strong>'
}

function restartGame() {
    startBtn.style.visibility = "visible"
    restartBtn.style.visibility = "hidden"
    timerEl.innerText = ""
    headerEl.innerHTML = 'Memory Game'
    init()
    renderTimer()
}

function checkMatch(evt) {
    if (evt.target.className !== "clicked") {
        evt.target.classList = "clicked"
        console.log(evt.target)
        evt.target.style.opacity = '1'
        selectedCards.push(evt.target)
        if (selectedCards.length === 2) {
            if (selectedCards[0].getAttribute('src') === selectedCards[1].getAttribute('src')) {
                matchNum += 1
                selectedCards = []
                console.log(matchNum)
            } else {
                setTimeout(() => {
                    selectedCards[0].style.opacity = '0'
                    selectedCards[1].style.opacity = '0'
                    selectedCards[0].classList.remove('clicked')
                    selectedCards[1].classList.remove('clicked')
                    selectedCards = []
                }, 500)
            }
        }
    }
}

function checkWin() {
    if (matchNum === 8) {
        headerEl.innerHTML = '<strong>You win! The kingdom is saved!</strong>'
        match = 0
    }
    if (timerEl.innerHTML === '0:00') {
        headerEl.innerHTML = '<strong>You lose!</strong>'
    }
}

init()