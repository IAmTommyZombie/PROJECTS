
    //For my final project, I decided to make a card flip game
    //The goal of the game is to click on different cards and match them with their pairs
    //Once a card matches, it can not be clicked again
    //The techniques I used are:
    //1. DOM traversal
    //2. Capturing and handling events
    //3. Creating and handling a data structure (array)
    //4. Closures

    //Note: this project needs to be run via a local host

    //Here we are traversing the DOM, and creating variabls from different id's and classes from the DOM elements
    var flipped = false; 
    var tryAgain = false;
    var first, second
    var score = document.getElementById("score");
    var count = document.getElementById("count");
    var clicks = 0
    //Here we are creating a data object (an array) contraining all of the cards in the game
    //and storing their data 
    var cards =  Array.from(document.getElementsByClassName("card"));

    //Here we have our functions to determine if two cards are a pair
    //If they are a pair, the event of 'click' will be removed form the 
    //cards
    function matched() {
        first.removeEventListener('click', flipCard);
        second.removeEventListener('click', flipCard);

        reset();
    }
    //If the cards are not a pair, we remove the 'flip' class, and they will be 
    //reverted back to their front side
    function notMatched(){
        tryAgain = true;

        setTimeout(() => {
            first.classList.remove("flip");
            second.classList.remove("flip");

            reset();
            }, 1000);

    }
    //Here, we check if the cards are a match. if they are, we call upon the matched function, 
    //which as said above, removes the 'click' event
    function matchCheck(){
        if (first.dataset.name === second.dataset.name) {
            matched();
        }
        else {
            notMatched();
        }
       
    } 

    //This function determines what happens when the cards are flipped
    function flipCard(){

        if (tryAgain) return;
        if (this === first) return;

        this.classList.add("flip");
        //This will decide which card is the first card to be flipped, determining between
        //the frist of two cards in a potential match
        if (!flipped) {
            flipped = true;
            first = this;
        //Here we add one to the flip counter on the DOM, adding the amount of cards flip a player makes
        //Note: this only counts toward the first card flipped
            clicks = clicks + 1;
            count.innerHTML = clicks;
            return;
        }
        //Same as above, this code determines which is the second card to be flipped
        flipped = false;
        second = this;
        matchCheck();
        //Same as bove, this adds 1 to the flip counter, every time the player flips a second card
        clicks = clicks + 1;
        count.innerHTML = clicks;
    }

    //This code determines that if both cards flipped in a turn aren't a match,
    //They flip back over and reset the turn
    function reset() {
        flipped = false;
        tryAgain = false;
        first = null;
        second = null;
    }
    //This is a self invoking function iterates through the array of cards, and adds a random math value
    //between 1 and 20, to the cards. The purpose of this code is to randomize the cards' positions
    //within the DOM
    (function random() {
        cards.forEach(card => {
            var position = Math.floor(Math.random() * 20);
            card.style.order = position;
        });
        
    })();

    //Finally, this last line adds the event listener of 'click' to each card in the array
    //of cards, and adds the 'flipCard' function to them, thus starting the chain of events
    //to the game
    cards.forEach(card => card.addEventListener('click', flipCard));




    