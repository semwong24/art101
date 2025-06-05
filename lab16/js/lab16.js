/*
   lab16.js - Experimenting with processing JSON from an API.
   Requirements: jQuery must be loaded.

   Author: Serene Wong <semwong@ucsc.edu>
   Date: 6/4/25
*/


/*// Call the XKCD API for the current comic
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
});*/


let currentComicNum = null;
let maxComicNum = null;

// This function fetches and displays a comic by number
function getAndPutData(comicNum = null) {
    let url = comicNum 
        ? `https://cors-anywhere.herokuapp.com/https://xkcd.com/${comicNum}/info.0.json`
        : `https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json`;

    $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
        success: function(comicObj) {
            console.log(comicObj);
            currentComicNum = comicObj.num;

            // Store the latest comic number for Random button
            if (!maxComicNum || comicObj.num > maxComicNum) {
                maxComicNum = comicObj.num;
            }

            let title = `<h3>${comicObj.title} (Comic #${comicObj.num})</h3>`;
            let img = `<img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}">`;
            let altText = `<p><em>${comicObj.alt}</em></p>`;
            $("#output").html(title + img + altText);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
            $("#output").html("<p>Something went wrong. Please try again later.</p>");
        }
    });
}

// Initial call to get the latest comic
getAndPutData();

// Event handler: Previous comic
$("#prevBtn").click(function() {
    if (currentComicNum > 1) {
        getAndPutData(currentComicNum - 1);
    }
});

// Event handler: Next comic
$("#nextBtn").click(function() {
    getAndPutData(currentComicNum + 1);
});

// Event handler: Random comic
$("#randomBtn").click(function() {
    if (maxComicNum) {
        let randomNum = Math.floor(Math.random() * maxComicNum) + 1;
        getAndPutData(randomNum);
    }
});

// Event handler: Go to specific comic number
$("#goBtn").click(function() {
    let inputVal = parseInt($("#comicInput").val());
    if (inputVal > 0 && (!maxComicNum || inputVal <= maxComicNum)) {
        getAndPutData(inputVal);
    } else {
        $("#output").html("<p>Please enter a valid comic number.</p>");
    }
});