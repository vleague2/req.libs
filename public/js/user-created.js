
$(document).ready( function() {

    // create array for the parts of speech and a variable to hold the user's story
    let partOfSpeechArr = [];
    let wholeStory;

    // when user clicks on the button to add a part of speech and
    //empty the blank
    $("#add-speech-part").on('click', function() {

        // assign variables to the user's inputs
        wholeStory = $("#add-story-parts").val() + ' *** ';
        let newSpeech = $("#catch-speech").val();

        // replace the value of the story input with the concatenated version
        $("#add-story-parts").val(wholeStory);

        // add newSpeech to the global array and empty form
        partOfSpeechArr.push(newSpeech);
        $("#catch-speech").val('');
    })

    // post ajax on submit button 
    $("#submit-story").click( function (){

        // grab username out of the username span, and title/category from input
        let username = $("#username").data("id");
        let title = $("#story-title").val();
        let category = $("#story-category").val();
        
        // create an object to send to server 
        let data = {
            story: wholeStory,
            speech: partOfSpeechArr,
            username: username,
            category: category,
            title: title
        }
        // run ajax call as a post
        $.ajax({
            load: console.log(data),
            type: 'POST',
            url: '/create/' + username,
            data: data,
            success: function (data) {

                // append a success message to page
                $("#append-to").append("<p class='saved-story'><i class='far fa-check-circle'></i> Story saved!</p>");
                
                // empty form on page
                $("#story-title").val('');
                $("#story-category").val('');
                $("#add-story-parts").val('');
            }
        });
    })
});