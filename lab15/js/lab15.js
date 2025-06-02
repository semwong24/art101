/*
   lab15.js - Working with AJAX and PokéAPI
   Requirements: jQuery must be loaded.

   Author: Serene Wong <semwong@ucsc.edu>
   Date: 6/2/25
*/

$("#activate").click(function () {
    console.log("Button clicked!");

    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/piplup",
        type: "GET",
        dataType: "json",
        success: function (data) {
            console.log("API data received:", data);

            // Build HTML output
            let outputHTML = `
                <h3>${data.name.toUpperCase()}</h3>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p><strong>Height:</strong> ${data.height}</p>
                <p><strong>Weight:</strong> ${data.weight}</p>
                <p><strong>Abilities:</strong> ${data.abilities.map(ability => ability.ability.name).join(", ")}</p>
            `;

            // Inject output into the page
            $("#output").html(outputHTML).fadeIn(300);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
            $("#output").html(`<p>Error fetching data. Try again later.</p>`);
        }
    });
});