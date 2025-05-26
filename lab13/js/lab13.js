/*
   lab13.js - Creating a FizzBuzz Loop
   Requirements: jQuery must be loaded.

   Author: Serene Wong <semwong@ucsc.edu>
   Date: 5/26/25
*/

// Initialize as empty, letting the user define factors and messages
let FACTORS = [];
let MESSAGES = {};

// Function to update the table of factor-message mappings
function updateFactorTable() {
    $("#factorTable").html(""); // Clear the existing table rows
    $("#factorTable").append("<tr><th>Factor</th><th>Message</th></tr>"); // Add the header row

    // Add rows for each factor-message pair, including an "edit" option
    FACTORS.forEach(factor => {
        $("#factorTable").append(
            `<tr>
                <td>${factor}</td>
                <td>${MESSAGES[factor]}</td>
            </tr>`
        );
    });
}

// FizzBuzz function to display numbers and their corresponding words for multiples of factors
function fizzBuzz(max = 200) {
    $("#output").html(""); // Clear the output div

    // Loop through numbers 1 to the max value (default 200)
    for (let i = 1; i <= max; i++) {
        let str = ""; // Start with an empty string for each number

        // Check for each factor in the FACTORS array
        FACTORS.forEach(factor => {
            if (i % factor === 0) {
                str += MESSAGES[factor] || ""; // Add corresponding message
            }
        });

        // If no factors matched, just show the number itself
        if (str === "") {
            str = i;
        }

        // Append each result in the format: number - message
        $("#output").append("<p>" + i + " - " + str + "</p>");
    }
}

// Listen for the "Update Max" button click
$("#updateMax").on("click", function() {
    const maxNumber = parseInt($("#maxNumber").val()) || 200; // Default to 200 if input is invalid
    fizzBuzz(maxNumber);  // Call fizzBuzz with the updated max number
});

// Listen for the "Add Factor" button click
$("#addFactor").on("click", function() {
    const factor = parseInt($("#factor").val());
    const message = $("#message").val();

    if (factor && message) {
        // Add new factor and message to the FACTORS and MESSAGES
        FACTORS.push(factor);
        MESSAGES[factor] = message;

        // Clear the input fields
        $("#factor").val('');
        $("#message").val('');

        // Re-run the fizzBuzz with the updated factors
        updateFactorTable();  // Update the table
        fizzBuzz();  // Re-run the FizzBuzz function
    } else {
        alert("Please enter both a factor and a message.");
    }
});

// Initial call to display the default fizzBuzz (1-200) and update the factor table
fizzBuzz();
updateFactorTable();