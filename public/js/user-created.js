console.log('im working')

let partOfSpeechArr = [];
let askeristArr = [];


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("add-speech-part").addEventListener('click',function ()
    {

        let wholeStory = document.getElementById('add-story-parts');
        var newSpeech = document.getElementById('catch-speech');

        console.log(wholeStory.value);
        wholeStory = wholeStory.value + ' >>' + newSpeech.value + '<< ';
        
        $('#add-story-parts').val(wholeStory)

        
        
        console.log(wholeStory);

        partOfSpeechArr.push(newSpeech.value);
        replacer();
        // if(something){
            
        // }
        console.log(askeristArr);
     console.log(partOfSpeechArr);
     $("#catch-speech").val('');

     
    }  ); 
});

// run on submit button
function replacer() {
    for(i=0; i<partOfSpeechArr.length; i++){
        askeristArr[i] = '***';
        }
}
