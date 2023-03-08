## Pseudocode
### Define required constants
- Colors of the cards in the “turned over” state (checkered)
- Values representing the 8 pairs present in the game
- Images for the 8 pairs present in the game
### Define required variables used to track the state of the game
- Board
- Randomized pairs (same thing as board?)
- Time left
- Wrong guesses remaining
### Store (cache) elements on the page that will be accessed in code more than once
- Store the 16 elements that will represent the “cards” on the page
- Store the "Start Game" button
- Store the "Restart Game" button
### Upon loading, the app should:
- Initialize the state variables
  - Randomize the pair locations on the board
- Render those values to the page
  - render()
  - renderBoard(): will need to assign random values from the 8 available pairs to each of the squares
  - renderTimer(): will need to start a timer and display it to the game board
    - Will also need to end the game once the timer is up (*might need to be its own function*)
  - renderCounter(): will need to initiate a counter and decrease it by 1 every time the player chooses a wrong pair
    - Will also need to end the game once the timer is up (*might need to be its own function*)
  - renderButtons(): will need to show the "Start Game" button if the player has won or lost and the "Restart Game" button during play
- Wait for the player to click the "Start Game" button
### Event Handlers
- Handle the player clicking the "Start Game" button
  - Logic starting the timer once the "Start Game" button is clicked
- Handle a player clicking a “card”
  - Logic controlling a correctly chosen pair remaining on the screen
  - Logic controlling an incorrectly chosen pair remaining on the screen for a couple seconds and then becoming hidden again
- Handle the “Wrong Guesses Remaining” counting down whenever the player chooses (clicks) an incorrect pair
- Handle a player clicking the “Restart Game” button at any point in the game
  - Logic controlling the board state resetting (re-initializing)

## Game Loop:
1. Game initializes
2. Player clicks “Start Game”
3. Timer begins and Wrong Guesses counter resets
4. Player starts choosing cards in pairs on the board
5. If player chooses wrong pair, “Wrong Guesses Remaining” gets reduced by 1
6. When wrong pair is chosen, choices are displayed for a certain amount of time and then go back to being hidden
7. Once all pairs are matched up, player wins game and game ends
8. If timer runs out, player loses game and game ends
9. If player exhuasts all chances at wrong guesses, player loses game and game ends
10. Player can choose to restart game at any point in the game which will reset the board, time, and amount of wrong guesses allowed
<!-- Stretch goal: Winning display message appears when player wins game -->
<!-- Stretch goal: Losing display message appears when player loses game -->
