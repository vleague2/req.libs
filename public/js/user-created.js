console.log('im working')

let partOfSpeechArr = [];

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("add-speech-part").addEventListener('click',function ()
    {

       
        var newSpeech =  document.getElementById('catch-speech').value;
        console.log(newSpeech);

        // document.getElementById('catch-speech').value - ''


        partOfSpeechArr.push(newSpeech)
     console.log('hello');
     console.log(partOfSpeechArr);
     
    }  ); 
});