console.log('im working')

let partOfSpeechArr = [];


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("add-speech-part").addEventListener('click',function ()
    {

        let wholeStory = document.getElementById('add-story-parts');
        var newSpeech = document.getElementById('catch-speech').value;
       
        // console.log(newSpeech);


        console.log(wholeStory.value);
        wholeStory = wholeStory.value + ' >>' + newSpeech + '<< ';
        console.log(wholeStory);

        partOfSpeechArr.push(newSpeech);
     console.log(partOfSpeechArr);
     $("#catch-speech").val('');
     
     
    }  ); 
});