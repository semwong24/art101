/* lab8.js - Lab 8: Anon Functions and Callbacks
    Author: Serene Wong <semwong@ucsc.edu>
    Date: 5/7/25
*/

//Named function: returns square of input
function square(x){
    return x * x;
}

//Test function
console.log("Square of 3:", square(3));
console.log("Square of 4:", square(4));
console.log("Square of 13:", square(13));

//Create an array of numbers
let numbers = [1, 3, 5, 7, 9];
console.log("My array:", numbers);

//Use map with named function
var squareResult = numbers.map(square);
// Should return [1, 9, 25, 49, 81]
console.log("Squares of array:", squareResult);

//Use map with anonymous function: (x * 0.5) + 5
var halfPlusFiveResult = numbers.map(function(x){
    return (x * 0.5) + 5;
});
//Should return [5.5, 6.5, 7.5, 8.5, 9.5]
console.log("Half plus five of array:", halfPlusFiveResult);


//Use jQuery to display both results in the HTML
$("#output").html(`
    <p><strong>Original Array:</strong> [${numbers.join(", ")}]</p>
    <p><strong>Squares:</strong> [${squareResult.join(", ")}]</p>
    <p><strong>Half plus five:</strong> [${halfPlusFiveResult.join(", ")}]</p>
  `);