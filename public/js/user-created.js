console.log('im working')

let partOfSpeechArr = [];
let askeristArr = [];
let wholeStory;


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("add-speech-part").addEventListener('click',function ()
    {

        wholeStory = document.getElementById('add-story-parts');
        var newSpeech = document.getElementById('catch-speech');

        console.log(wholeStory.value);
        wholeStory = wholeStory.value + ' *** ';
        
        $('#add-story-parts').val(wholeStory)        
        
        console.log(wholeStory);

        partOfSpeechArr.push(newSpeech.value);
        replacer();
        
        console.log(askeristArr);
     console.log(partOfSpeechArr);
     $("#catch-speech").val('');

     
    }  ); 
});





function replacer() {
    for(i=0; i<partOfSpeechArr.length; i++){
        askeristArr[i] = '***';
        }
}

// post ajax on submit button 
$("#submit-story").click( function (){

    console.log('i am working');

    let username = $("#username").val();

    console.log(username);
    

    data = {
        story: wholeStory,
        speech: partOfSpeechArr,
        username: username
    }

 
    $.ajax({
        load: console.log(data),
        type: 'POST',
        url: '/create/' + username,
        data: data,

        success: function (data) {
            console.log('i sent the data')
            console.log(data);
        }
    });

});