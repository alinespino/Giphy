


var gifs = [ "halloween","boxing", "duh,", "stranger things", "giggle"];



function displayGifs (){

var gif = $(this).attr("data-gif");
var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=wOfE3IVcSk89HtfS24EuvKdWjkGTEFiX&limit=10";

//Ajax//

$.ajax({
	url: queryURL,
	method: "GET"
})
.done(function(response){


console.log(queryURL);
console.log(response.data.image_url);



// GIF SHOULD DISPLAY // 

var gifDiv = $("<div class='giphy'>");

var postGif = $("<img>");
// postGif.attr("src", response.rating);

postGif.attr("src", response.data.image_url);

gifDiv.append(postGif);

$("#gifs-display").prepend(gifDiv);

});

}


function displayButtons () {



$("#new-btns").empty();

for (var i=0; i < gifs.length; i++) {

var button = $("<button>");
button.addClass("giphy");
button.attr("data-giphy", gifs[i]);
button.text(gifs[i]);

$("#new-btns").append(button);
}

};


$("#add-btn").on("click",function(event){
	event.preventDefault();



	var gif = $("#gif-input").val().trim();
	gifs.push(gif);

	displayButtons();

});

	$(document).on("click", ".giphy", displayGifs);

	displayButtons();


