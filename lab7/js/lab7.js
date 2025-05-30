// lab7.js - Lab 7: Functions
// Author: Serene Wong <semwong@ucsc.edu>
// Date: 5/2/25

/* Function to sort the letters of a user's name
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
    console.log("nameArray: ", nameArray);
    let sortedArray = nameArray.sort();
    console.log("sortedArray: ", sortedArray);
    let sortedName = sortedArray.join('');
    console.log("sortedName: ", sortedName);

    return sortedName;
}

document.writeln("<div class='name-output'>Sorted Name: " + sortUserName() + "</div>");
*/

// Function to shuffle letters in a string 
function shuffleString(str){
    let arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}

// Function to capitalize the first letter
function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Main function to manipulate name
function processUserName(name){
    // Normalize casing and remove spaces
    let cleanName = name.toLowerCase().replaceAll(" ", "");

    // Sort letters
    let sorted = cleanName.split('').sort().join('');

    // Shuffle for anagram
    let shuffled = shuffleString(cleanName);

    // Capitalize sorted result
    let sortedCapitalized = capitalize(sorted);

    // Capitalize shuffled result
    let shuffledCapitalized = capitalize(shuffled);

    return {
        original: name,
        sorted: sortedCapitalized,
        anagram: shuffledCapitalized
    };
}

// Prompt user outside the function
let userName = window.prompt("What's your name?");

// Fallback if no input
if (!userName || userName.trim() === "") {
    userName = window.prompt("You didn't enter a name. Try again:");
}

if (!userName || userName.trim() === "") {
    document.writeln("<div class='name-output'>No name entered!</div>");
} else {
    let result = processUserName(userName);
    document.writeln("<div class='name-output'>Original: " + result.original + "</div>");
    document.writeln("<div class='name-output'>Sorted: " + result.sorted + "</div>");
    document.writeln("<div class='name-output'>Anagram: " + result.anagram + "</div>");
}