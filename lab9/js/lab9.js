/* lab9.js - Lab 9: Libraries & jQuery
    This simple JavaScript/jQuery script uses buttons to modify some elements on the page

    Requirements: jQuery must be loaded for this script to work.
    Author: Serene Wong <semwong@ucsc.edu>
    Date: 5/12/25
*/

//Append buttons to each section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("#problems").append("<button id='button-problems'>Make Special</button>");
$("#results").append("<button id='button-results'>Make Special</button>");

// Toggle special class on click
$("#button-challenge").click(function() {
    $("#challenge").toggleClass("special");
});

$("#button-problems").click(function() {
    $("#problems").toggleClass("special");
});

$("#button-results").click(function() {
    $("#results").toggleClass("special");
});
