// lab.js - Lab 6: Arrays and Objects for Transportation
// Author: Serene Wong <semwong@ucsc.edu>
// Date: 4/27/25

// Define Variables
let myTransport = [
  "rides from friends",
  " bus (public transit)",
  " Toyota RAV4",
  " Tesla Model Y (mom's car)",
  " Subaru Forester (dad's car)",
  " walking"
];

// Create an object for my main ride
let myMainRide = {
  make: "Toyota",
  model: "RAV4",
  color: "Blue",
  year: 2007,
  ownIt: false,
  currentYear: 2025,
  // we can define a function within our object (called a method)
  // that uses the value of the year above (using this.year) in order
  // to determine the vehicle age
  age: function() {
      return this.currentYear - this.year;
  }
};

// Output
document.writeln("Kinds of transport I use: ", myTransport, "<br>");
// The following allows us to write an object to the document
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");