// Task 3: Turn pseudocode into comments - Dice Game
// An implementation of the game
// Author: Serene Wong <semwong@ucsc.edu> (and Elio Kim)
// Date: 4/21/25

// Dice Game:
  // Initialize total score to 0
  // Initialize number of throws to 0
  // Explain rules to player
    // Tell player the goal: reach 50 points in no more than 10 turns
    // After each dice roll, the player selects an operation (+, -, *, /)
    // A second dice is rolled and the result is used in the chosen operation
    // The result of the operation is added to the total score
    // Division will use integer division
    // The game ends when the player reaches 50 or more points (win) or after 10 turns without reaching 50 (lose)
  // While total score is less than 50 and number of throws is less than 10:
    //    Simulate a dice roll (random number between 1 and 6)
    //    Display result to the player
    //    Ask the player to choose an operation (+, -, *, /)
    //    Simulate a second dice roll (random number between 1 and 6)
    //    Apply the chosen operation to the total score using the second dice roll
      //    If “+”, add second roll to total
      //    If “-”, subtract second roll from total
      //    If “*”, multiply total by second roll
      //    If “/”, use integer division
    //    Update and display new total score
    //    Increase number of throws by 1
  // If total score is 50 or more:
    //    Display “You Win!”
  // Else:
    //    Display “You Lose! Game Over”

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
