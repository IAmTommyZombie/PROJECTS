/* hw4.js  */

// your solution here

//On the page load, we are giving the button an event that when clicked, 
//it will excecute our "highlight" function
window.onload = function(){
    var button = document.getElementById("divideTranscript");
    button.addEventListener("click", highlight, false);
};

//This function will execute once the button is clicked
function highlight(){

    //First, we divide the text into an array of words, splitting off blank spaces
    var transcript = document.getElementById("transcriptText");
    var transcriptText = transcript.innerHTML;
    var text = transcriptText.split(" ");
    var textLength = text.length;
    //When the button is clicked, our "transcriptText" div will now become empty
    //But we want to add the same content back to it, this time adding a <span> tag to every word
    document.getElementById("transcriptText").innerHTML = "";
    for (var i=0; i<textLength; i++){
        var word = text[i]
        //Above we split the bank spaces in between letters, so the "word" variable will only contain words
        var span = document.createElement("span");
        var wordTextNode = document.createTextNode(word);
        //If we don't create the space variable, then all the letters will be together creating one long gibberish word
        var space = document.createTextNode(" ");
        
        //Below is the event of when you mouseover each <span> tag (each word) in the transcriptText id
        //On mouseover, the background of each word will "highlight" to orange
    span.addEventListener("mouseover", function() { 
        this.setAttribute("class", "word");
        this.style.backgroundColor = 'orange';
    });

        //And this is the event of when the mouse leave the word, the background will go back to white
    span.addEventListener("mouseout", function () {
        this.setAttribute("class", "word");
        this.style.backgroundColor = 'white';
    });

        //This adds the span tag to the words
    span.appendChild(wordTextNode);

        //And here we are adding the content back to the transcriptText id
    transcript.appendChild(span);
    transcript.appendChild(space);

        //I'm choosing to disable the button after one click so there won't be extra spans added to the transcript upon multiple clicks
    document.getElementById("divideTranscript").disabled = true
    }
}











