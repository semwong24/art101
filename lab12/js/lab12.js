/*
   lab12.js - Sorting Hat lab with images and conditionals
   Requirements: jQuery must be loaded.

   Author: Serene Wong <semwong@ucsc.edu>
   Date: 5/20/25
*/

// Define the houses array with names, descriptions, and image paths
const houses = [
    {
        name: "the Bat Family",
        description: "Gotham's shadows, filled with vigilantes like Batman, Nightwing, and Batgirl.",
        image: "img/batfamily.jpg",
        credit: "Image © DC Comics"
    },
    {
        name: "the Super Family",
        description: "Soaring with hope and strength like Superman, Supergirl, and Superboy.",
        image: "img/superfamily.png",
        credit: "Image © DC Comics"
    },
    {
        name: "the Amazons",
        description: "Warriors of wisdom and power like Wonder Woman, Artemis, and Wonder Girl.",
        image: "img/amazons.png",
        credit: "Image © DC Comics"
    },
    {
        name: "the Speedsters",
        description: "Quick-witted and fast-paced, from The Flash to Impulse.",
        image: "img/speedsters.jpg",
        credit: "Image © DC Comics"
    },
    {
        name: "the Lantern Corps",
        description: "Emotional warriors wielding powerful rings, from Green Lantern to Larfleeze.",
        image: "img/lanterncorps.jpg",
        credit: "Image © DC Comics"
    }
];

// Function to generate a hash from a string
function hashCode(str){
    let hash = 0;
    for (let i = 0; i < str.length; i++){
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
}

// Function that returns a house based on the length of the name mod houses.length
function sortingHat(name) {
    const hash = hashCode(name);
    const mod = hash % houses.length;
    console.log(`Hash: ${hash}, mod: ${mod}`);  // Debug log
    return houses[mod];
}

$(document).ready(function() {
    console.log("Document ready, attaching click listener.");

    //Automatically focus the input field when the page loads
    $("#input").focus();

    $("#button").click(function() {
        const name = $("#input").val().trim();

        if(name === "") {
            alert("Please enter your name.");
            return;
        }

        console.log(`Input name: ${name}`);

        const house = sortingHat(name);

        // Update output text (with fade=in effect)
        $("#output").hide().html(`
            <h2>The Sorting Hat has sorted you into <span style="color: gold;">${house.name}</span>:</h2>
            <p>${house.description}</p>
        `).fadeIn();

        // Update image and credit (with fade-in effect)
        $("#house-image").hide().html(`
            <img src="${house.image}" alt="${house.name}" class="sorting-image">
            <div style="font-size: 0.8em; color: lightgray; margin-top: 5px;">${house.credit}</div>
        `).fadeIn();
    });

    // Let the Enter key trigger the same action as the button
    $("#input").keypress(function(event){
        if (event.which === 13){
            $("#button").click();
        }
    });
});