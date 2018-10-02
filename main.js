//Game show titles to be turned into buttons
var titles = ["The Price is Right", "The Family Feud", "Jeopardy", "Press Your Luck"];

//Main function
var buttonMaker = function(){

    //Create buttons from titles array
    for (var i = 0; i < titles.length; i++) {

        //Adds "+" between words
        var plusTitles = titles[i].split(' ').join('+');

        //Button attributes
        var button = $('<button data-game=' + plusTitles + '>').append(titles[i]);

        //Add button class
        button.addClass('button');
        
        //Appened to div
        $('#gameButtons').append(button);
        
    }

    //User adds game show title
    $('#addgame').on('click', function() {

        //Clear the buttons so they won't duplicate on the page
        $('#gameButtons').empty();
         
        //newTitle gets the game show title user entered
        var newTitle = $('#game-input').val();

        //Only add one instance of game
        for (i = 0; i < titles.length; i++) {
        
            //If newTitle can be found in the array
            if (newTitle == titles[i]) {

               //Remove newTitle from the array
                titles.pop(newTitle);
            }
        }

        //Adds newTitle to the titles array
        titles.push(newTitle);

        //Calls the loop again with the new title
        buttonMaker();

     });
  
    //User clicks on game button
    $('.button').on('click', function() {

        //ID's which button selected
        var game = $(this).data('game');

        console.log($(this).data('game'));
        
        //Adds game to the queryURL
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + game + "&api_key=hBPjkyBUvbBoWjcGancKhQr995GgIceH&limit=10";

        //Ajax call
         $.ajax({
            url: queryURL,
            method: 'GET'
            })

        //Ajax response
        .done(function(response) {

            //Console log object returned
            console.log(response);

            //Set the response to results variable
            var results = response.data;

            //Empty out previous gifs
            $('#gameShow').empty();

                //Loop to display all 10 gifs
                for (var i = 0; i < results.length; i++) {

                    //Create gameDiv
                    var gameDiv = $("<div id='card'>");

                    //Create p
                    var p = $('<p>');

                    //Set rating to variable
                    var rating = results[i].rating.toUpperCase();

                        //Tests if rating is given
                        if (rating == ''){

                            p.text("Not rated");
                        }
                        else {
                            p.text("Rated " + rating);
                        }

                    //Create img tag    
                    var gameImage = $('<img>');

                    //Attribute source
                    gameImage.attr("src", results[i].images.fixed_height_small_still.url);

                    //Attribute still image
                    gameImage.attr("data-still", results[i].images.fixed_height_small_still.url);

                    //Attribute active image
                    gameImage.attr("data-active", results[i].images.fixed_height_small.url);

                    //Append the rating
                    gameDiv.append(p);

                    //Append gameImage to the div
                    gameDiv.append(gameImage);

                    //Prepend to #games
                    $('#gameShow').prepend(gameDiv);
                        
                }

            //On click to animate gifs  

            $('img').on('click', function(e){

                console.log(e);

                //Set current to the current URL
                var current = e.currentTarget.dataset.still;

                //Set active to the active URL
                var active = e.currentTarget.dataset.active;

                //Set still to the still URL
                var still = e.currentTarget.dataset.still;

                  if (current == still) { 
                   
                   //Switch to active URL
                   $(this).attr('src', active);

                   //Set current
                   current = active;

                }
                
                else {

                    //Switch to still URL
                    $(this).attr('src', still);

                    //Set current
                    current = still;
                }
                
            })

            })

        });
};

//Start the app
buttonMaker();