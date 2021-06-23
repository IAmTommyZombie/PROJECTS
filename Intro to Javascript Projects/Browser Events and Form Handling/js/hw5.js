/* hw5.js */
window.onload = function(){
    "use strict";

    var form = document.forms[0];
    //Problem 1: Password Check
    //With this code, we are making sure the passwords entered are at least 8 characters long
    //And that both passwords entered match each other
function check(entry){
    var pwd1 = document.getElementById("pwd1");
    var pwd2 = document.getElementById("pwd2");
    var pwd1Hint = document.getElementById("pwd1Hint");
    var pwd2Hint = document.getElementById("pwd2Hint");
    var pwdReq = /.{8,}/;
    
    
    if (entry.target === pwd1 || entry.target === pwd2) {

        if (pwdReq.test(pwd1.value)) {
            pwd1Hint.style.display = "none"

            if ((pwdReq.test(pwd1.value)) && pwd1.value !== pwd2.value){
                pwd2Hint.style.display = "inline";
            }
            else {
                pwd2Hint.style.display = "none";
            }
        }
            else {
                pwd1Hint.style.display = "inline";
            }
        }
    }
    form.addEventListener("input", check, false);


    //Problem 2: Bio Count
    //With this code, we are limiting the user to only type in 140 characters into the "bio" field
    var bio = document.getElementById("bio");
    var count = document.getElementById("charsLeft");
    
    function bioCount(x) {
        var start = 140;
        var length =  bio.value.length;

            if (length < start && x.keyCode !==8) {
                length++
                count.innerHTML = start - length;
            }
            else {
                if (x.keyCode !==8) {
                    x.preventDefault();
                }

            if (x.keyCode == 8 && length > 0) {
                length--;
                count.innerHTML = start - length;
            }
        }
    }

    bio.addEventListener("keydown", bioCount, false);

    //Problem 3: Selection
    //With this code, we are allowing the user to select from a select field, and depending which brand they select,
    //They will have a variety of wrewstlers to choose from
        var wwf = {
            wrestler : [["Raw", ["Hulk Hogan", "Macho Man", "The Rock", "Stone Cold"]], ["Smackdown", ["The Undertaker", "Kane", "Mankind", "HHH"]]]
        };

        
        (function() {
            var first = document.getElementById("firstSelect");
            var second = document.getElementById("secondSelect");

            var length = wwf.wrestler.length;

            for (var i = 0; i < length; i++) {

                var option = document.createElement("option");

                var tnode = document.createTextNode(wwf.wrestler[i][0]);

                option.appendChild(tnode);
                option.setAttribute("value", wwf.wrestler[i][0]);
                first.appendChild(option);
    
                first.addEventListener("change", function() {
                    var start = this.selectedIndex - 1;
                    
                    if (start != -1){
                    var select = wwf.wrestler[start][1];
                    var len = select.length;
                    second.innerHTML = "<option>--Choose Your Wrestler--</option>";
                    for (var j = 0; j < len; j++) {
                        var newOpt = document.createElement("option");
                        var tnode2 = document.createTextNode(select[j]);
                        newOpt.appendChild(tnode2);
                        newOpt.setAttribute("value", select[j]);
                        second.appendChild(newOpt);
                       }
                    }
                    else {
                        second.innerHTML = "<option>-</option>";
                    }
                }, false);
            }
        })();
        
        //Problem 4: Radio button options
        //With this code, we are allowing the user to selection an option (in this case a band), and depending on which band they choose, 
        //a subection of songs by the selected band will appear for the user to select
        //Please excuse the css formatting on this one, I definietly need to touch up on my CSS a bit
        var artists = document.getElementById("artists");
        artists.addEventListener("click", function(x) {
            var theEagles = document.getElementById("theEagles");
            var metallica = document.getElementById("metallica");
            var theOffspring = document.getElementById("theOffspring");
            var eaglesSong = document.getElementById("eaglesSong");
            var metallicaSong = document.getElementById("metallicaSong");
            var offspringSong = document.getElementById("offspringSong");
            
            if (x.target === theEagles) {
                eaglesSong.style.display = "block";
                metallicaSong.style.display = "none";
                offspringSong.style.display = "none";
                console.log(artists);
            }
            if (x.target === metallica) {
                eaglesSong.style.display = "none";
                metallicaSong.style.display = "block";
                offspringSong.style.display = "none";
            }
            if (x.target === theOffspring) {
                eaglesSong.style.display = "none";
                metallicaSong.style.display = "none";
                offspringSong.style.display = "block";
            }
           
        }, false);
        
        //Problem 5 + 6: Telephone entry and form submission
        //I grouped these two together as I found coding them hand in hand was easier 
        //Here, we have a regular expresson that checks for a phone number format. 
        //Upon clicking the validation form, the code checks for two things;
        //1: The phone number entry field is not empty, and also contains the regular expression we have given.
        //2: That if either the phone number or email field is empty, the user will be prompted to fill out at least one of them.
        var number = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        var register = document.getElementById("submitBtn");
 
        register.addEventListener("click", function(){
            

            var email = document.getElementById("email").value;
            var phone = document.getElementById("phone").value;
            var eLength = email.length
            var pLength = phone.length
            console.log(email);

            if (pLength !== 0){
                if(number.test(phone)){
                 }
                 else {
                    alert("This is not a valid phone number")
                    return;
                 }

            if (eLength == 0 && pLength == 0) {
                alert("Please fill out either your phone number or email address")
                return;

            }
            else {
                alert("Thank you for submitting!")
            }
        }
    }, false);

}
