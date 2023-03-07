- Define required constants
  - Colors of the cards in the “turned over” state (checkered)
  - Values representing the 8 pairs present in the game
  - Images for the 8 pairs present in the game
- Define required variables used to track the state of the game
  - Board
  - Randomized pairs
  - Time left
  - Wrong guesses remaining
- Store (cache) elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.
  - Store the 16 elements that will represent the “cards” on the page
  - Store the "Start Game" button
  - Store the "Restart Game" button
- Upon loading, the app should:
  - Initialize the state variables
    - Randomize the pair locations on the board
  - Render those values to the page
  - Wait for the player to click the "Start Game" button
- Handle the player cicking the "Start Game" button
  - Logic starting the timer once the "Start Game" button is clicked
- Handle a player clicking a “card”
  - Logic controlling a correctly chosen pair remaining on the screen
  - Logic controlling an incorrectly chosen pair remaining on the screen for a couple seconds and then becoming hidden again
- Handle the “Wrong Guesses Remaining” counting down whenever the player chooses (clicks) an incorrect pair
- Handle a player clicking the “Restart Game” button at any point in the game
  - Logic controlling the board state resetting (re-initializing)
- Logic controlling the game ending once the timer is up
- Logic controlling the game ending once the player runs out of “wrong guesses”
- Game loop:
  - Game initializes
  - Player clicks “Start Game”
  - Timer begins
  - Player starts choosing cards in pairs on the board
  - If player chooses wrong pair, “Wrong Guesses Remaining” gets reduced by 1
  - When wrong pair is chosen, choices are displayed for a certain amount of time and then go back to being hidden
  - Once all pairs are matched up, player wins game and game ends
  - If timer runs out, player loses game and game ends
  - If player exhuasts all chances at wrong guesses, player loses game and game ends
  - Player can choose to restart game at any point in the game which will reset the board, time, and amount of wrong guesses allowed
<!-- Stretch goal: Winning display message appears when player wins game -->
<!-- Stretch goal: Losing display message appears when player loses game -->