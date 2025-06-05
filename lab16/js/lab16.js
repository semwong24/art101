/*
   lab16.js - Experimenting with processing JSON from an API.
   Requirements: jQuery must be loaded.

   Author: Serene Wong <semwong@ucsc.edu>
   Date: 6/4/25
*/


// Call the XKCD API for the current comic
$.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json", // latest comic
    type: "GET",
    dataType: "json",
    success: function(comicObj) {
        console.log(comicObj); // inspect the data
        let title = `<h3>${comicObj.title}</h3>`;
        let img = `<img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}">`;
        let altText = `<p><em>${comicObj.alt}</em></p>`;
        $("#output").html(title + img + altText);
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
        $("#output").html("<p>Something went wrong. Please try again later.</p>");
    }
});