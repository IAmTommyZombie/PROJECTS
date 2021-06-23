var textArea = document.getElementById("myWordsToCount");
var words = document.getElementById("wordcount");

textArea.onkeyup = function() {
    

    var words_s = textArea.value.toString();
    var array = []

    array.push(words_s.split(" "));

    array.forEach(function(entry) {

        var array2 = entry.filter((item) => item!=="")
    
        words.innerHTML = array2.length;

    }
)};
