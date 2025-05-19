/*
   lab11.js - 
   This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

    Author: Serene Wong <semwong@ucsc.edu>
    Date: 5/19/25
*/

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}


// click listener for button
$("#submit").click(function(){
    // get value of input field
    const userName = $("#user-name").val();

    if (userName === "") {
        $("#output").append('<div class="text warning"><p>Please enter a name first!</p></div>');
        return;
    }

    // now let's sort it
    const userNameSorted = sortString(userName);

    // append a new div to our output div
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});

// Randomly shuffles characters of a string to create an anagram
function anagram(inputString){
    const arr = inputString.split('');
    for (let i = arr.length - 1; i>0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}

$("#anagram").click(function(){
    const userName = $("#user-name").val();

    if (userName === "") {
        $("#output").append('<div class="text warning"><p>Please enter a name to scramble!</p></div>');
        return;
    }

    const userNameAnagram = anagram(userName);
    $("#output").append('<div class="text"><p>' + userNameAnagram + '</p></div>');
});

// click listener for a new button
$("#show-info").click(function(){
    // get values of new input fields
    const userAge = $("#user-age").val();
    const userColor = $("#user-color").val();

    if (userAge === "" || userColor === "") {
        $("#output").append('<div class="text warning"><p>Please enter both your age and favorite color!</p></div>');
        return;
    }

    // create new paragraphs for each input and append them
    $("#output").append('<div class="text"><p>Age: ' + userAge + '</p></div>');
    $("#output").append('<div class="text"><p>Favorite Color: ' + userColor + '</p></div>');
})

// Glitch effect on the page
function glitchEffect(){
    // Array of random colors for background and text
    const colors = ["#ff0066", "#00ffff", "#ffcc00", "#6600ff", "#00ff00", "#ff3300"];

    // Pick random background and text colors
    const bgColor = colors[Math.floor(Math.random() * colors.length)];
    const textColor = colors[Math.floor(Math.random() * colors.length)];

    // Apply colors to body and content
    $("body").css("background-color", bgColor);
    $("#content").css("color", textColor);

    // Add a quick shake animation by toggling a CSS class
    $("#content").addClass("shake");

    // Remove shake class after animation ends (0.5s here)
    setTimeout(() => {
        $("#content").removeClass("shake");
    }, 500);
};

// Manual glitch button
$("#glitch").click(function () {
    glitchEffect();
});

// Auto-glitch toggle
let glitchIntervalId = null;

$("#auto-glitch-toggle").click(function () {
  if (glitchIntervalId === null) {
    glitchIntervalId = setInterval(glitchEffect, 3000); // glitch every 3s
    $(this).text("Stop Auto-Glitch");
  } else {
    clearInterval(glitchIntervalId);
    glitchIntervalId = null;
    $(this).text("Start Auto-Glitch");
    $("body").css("background-color", "");
    $("#content").css("color", "");
  }
});