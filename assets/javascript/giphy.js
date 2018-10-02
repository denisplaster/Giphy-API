var shows = ['Big Brother', 'Kardashians', 'Survivor', 'The Bachelor', 'Jersey Shore', 'Real World', 'Cops', 'Naked and Afraid', 'Fear Factor', 'Duck Dynasty', 'The Osbournes', 'Here Comes Honey Boo Boo', 'Deadliest Catch', 'Top Chef'];
// array of perselected shows

$(document).on('click', '.showTop', function () {

    var show = $(this).attr('data-show');

    // add 10 gifs per show

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=hBPjkyBUvbBoWjcGancKhQr995GgIceH&limit=10";

    // connect  giphy api with ajax

    $.ajax({
        url: queryURL,
        method: 'GET'

    }).done(function (response) {
        //function for accessing the giphy api and giving each a rating and size

        var results = response.data;

        $('#showsHere').empty();

        for (var i = 0; i < results.length; i++) {

            var showsDiv = $('<div class="showLineUp">');

            var p = $('<p>').text("Rating: " + results[i].rating);

            var showImage = $('<img>');

            showImage.attr('src', results[i].images.fixed_height_still.url);

            showImage.addClass('gif');

            showImage.attr('data-state', 'still');

            showImage.attr('data-animate', results[i].images.fixed_height.url);

            showImage.attr('data-still', results[i].images.fixed_height_still.url);

            showsDiv.append(p);

            showsDiv.append(showImage);

            //send gifs to html

            $('#showsHere').prepend(showsDiv);

        }

    });

});

// Create a button when each show is submited

function renderButtons() {

    $('#showButtons').empty();

    for (var i = 0; i < shows.length; i++) {

        var a = $("<button>"); 

        a.addClass('showTop btn btn-default'); 

        a.attr('data-show', shows[i]); 

        a.text(shows[i]);

        $('#showButtons').append(a); 

    }

}

// User can add shows to the set list of buttons
// prevents the making of multiple nuttons of the same name

$(document).ready(function () {

    renderButtons();

    $('#addshow').on('click', function () {

        var newshow = $('#show-input').val().trim();

        shows.push(newshow);

        renderButtons();

        $('#show-input').val('');

        return false;

    });

});



// Add a funciton that starts or pauses the gifs

$(document).on('click', '.gif', function () { 

    if ($(this).attr('data-state') === 'still'){ 

                $(this).attr('src', $(this).data('animate'));

                $(this).attr('data-state', 'animate');

            }else{ 

                $(this).attr('src', $(this).data('still')); 

                $(this).attr('data-state', 'still'); 

            }

});