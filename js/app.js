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
const startBtn = document.getElementById('start')
const restartBtn = document.getElementById('restart')

/*----- event listeners -----*/


/*----- functions -----*/

