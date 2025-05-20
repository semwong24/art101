/*
   lab12.js - 
   Experiments with conditionals.

   Requirements: jQuery must be loaded for this script to work.

    Author: Serene Wong <semwong@ucsc.edu>
    Date: 5/20/25
*/

// Function that assigns a DC group based on the length of the name
function sortingHat(str){
    let length = str.length;
    let mod = length % 4;

    if (mod === 0){
        return "the Bat Family: Gotham's shadows, filled with vigilantes like Batman, Nightwing, and Batgirl.";
    } else if (mod === 1){
        return "the Super Family: Soaring with hope and strength like Superman, Supergirl, and Superboy.";
    } else if (mod === 2){
        return "the Amazons: Warriors of wisdom and power like Wonder Woman, Artemis, and Wonder Girl. ";
    } else if (mod === 3){
        return "the Speedsters: Quick-witted and fast-paced, from The Flash to Impulse.";
    }
}

$("#button").click(function(){
    let name = $("#input").val();
    let house = sortingHat(name);
    $("#output").html("<h2>The Sorting Hat has sorted you into <span style='color: gold;'>" + house + "</span></h2>");
});