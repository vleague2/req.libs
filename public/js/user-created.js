// when the page is ready
$(document).ready( function() {
    console.log('im working')

    // create array for the parts of speech
    let partOfSpeechArr = [];

    // create variable to hold the user's story
    let wholeStory;

    // when user clicks on the button to add a part of speech
    $("#add-speech-part").on('click', function() {
        // assign wholeStory variable to the user's input
        wholeStory = $("#add-story-parts").val() + ' *** ';

        // assign newSpeech to the user's input
        let newSpeech = $("#catch-speech").val();

        console.log(wholeStory);

        // replace the value of the story input with the concatenated version
        $("#add-story-parts").val(wholeStory);

        // add newSpeech to the global array
        partOfSpeechArr.push(newSpeech);

        // run the replacer function
        // replacer();

        $("#catch-speech").val('');
    })

    // post ajax on submit button 
    $("#submit-story").click( function (){

        console.log('i am working');

        // grab username out of the username span
        let username = $("#username").data("id");

        console.log(username);

        // grab story title from input
        let title = $("#story-title").val();

        // grab story category from input
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
            // concatenate username to ajax call
            url: '/create/' + username,
            data: data,

            // when call is successful
            success: function (data) {
                console.log('i sent the data')
                console.log(data);

                // append a success message to page
                $("#append-to").append("<p class='saved-story'><i class='far fa-check-circle'></i> Story saved!</p>")
            }
        });
    })
});