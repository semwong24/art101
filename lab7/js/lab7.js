// lab7.js - Lab 7: Functions
// Author: Serene Wong <semwong@ucsc.edu>
// Date: 5/2/25

// Function to sort the letters of a user's name
function sortUserName(){
    //Prompt user for their name
    let userName = window.prompt("What's your name?");
    console.log("User Name: ", userName);

    //Give user another try if they cancel or enter nothing
    if (!userName){
        userName = window.prompt("You didn't enter a name. Try again:");
    }

    //If still no text input, exit with message
    if (!userName){
        return "You didn't enter a name!";
    }

    //Convert name to array, sort it, then join back
    let nameArray = userName.split('');
    let sortedArray = nameArray.sort();
    let sortedName = sortedArray.join('');

    return sortedName;
}

document.writeln("<div class='name-output'>Sorted Name: " + sortUserName() + "</div>");