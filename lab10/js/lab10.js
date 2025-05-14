/* lab10.js - Lab 10: JavaScript for the Web
    This simple JavaScript/jQuery script appends new elements to an output div

    Requirements: jQuery must be loaded for this script to work.
    
    Author: Serene Wong <semwong@ucsc.edu>
    Date: 5/13/25
*/

function generateRandomText() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}

// Bonus task
let messageCount = 0; //track how many messages have been added

// click listener for button
$("#make-convo").click(function(){
    // get user input value
    const userInput = $("#user-input").val().trim();

    // use user input if available, otherwise generate random text
    const newText = userInput !== "" ? userInput : generateRandomText();

    //decide class based on message number
    const alignmentClass = (messageCount % 2 === 0) ? "left" : "right";

    // append a new div to our output div
    $("#output").append('<div class="text ' + alignmentClass + '"><p>' + newText + '</p></div>');

    messageCount++;

    //clear the input field
    $("#user-input").val("");
});

$("#user-input").keypress(function(event) {
    if (event.which === 13) {// 13 = Enter key
        $("#make-convo").click();
    }
});

