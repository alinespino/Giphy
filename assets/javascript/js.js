


var gifs = [ "halloween","boxing", "duh", "stranger things", "giggle"];



function displayGifs (){

var gif = $(this).attr("data-topic");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif +"&api_key=wOfE3IVcSk89HtfS24EuvKdWjkGTEFiX&limit=10";
$("#gifs-display").empty();

//Ajax//

$.ajax({
	url: queryURL,
	method: "GET"
})
.done(function(response){


console.log(queryURL);

console.log(response);



// GIF SHOULD DISPLAY // 

for ( var i=0; i < response.data.length; i++) {

var gifDiv = $("<div>");

var postGif = $("<img class='giphyck'>");


postGif.attr("src", response.data[i].images.downsized_still.url);
postGif.attr("data-state", "still");
postGif.attr("data-still", response.data[i].images.downsized_still.url);
postGif.attr("data-animate", response.data[i].images.downsized.url);

console.log(response.data[i].images.downsized_still.url);
gifDiv.append(postGif);

$("#gifs-display").prepend(gifDiv);



}

});

}


function displayButtons () {



$("#new-btns").empty();

for (var i=0; i < gifs.length; i++) {

var button = $("<button>");
button.addClass("giphy");
button.attr("data-topic", gifs[i]);
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


$(document).on("click", ".giphyck", animation);


function animation (){

	var state = $(this).attr("data-state");

	if (state === "still") {
  $(this).attr("data-state","animate");
  $(this).attr("src", $(this).attr("data-animate"));

}

else { 

  $(this).attr("data-state","still");
  $(this).attr("src", $(this).attr("data-still"));
}
}
