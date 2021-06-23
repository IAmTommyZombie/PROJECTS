
/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 *
 *
 */


 /********************************************************************
  *
  * Second problem: Put An X
  *
  ********************************************************************/

var placeBtn = document.getElementById("placeMarkerButton");
placeBtn.onclick = function(){

 	// get a reference to the box
        var graphElement = document.getElementById("graph");

        // now get the width and height of the box - see the clientWidth and clientHeight documentation at
        //   https://www.w3schools.com/jsref/dom_obj_all.asp
        var width = graphElement.clientWidth;
        var height = graphElement.clientHeight;

        /*
         *   Now, here's where you do your magic. The xPosition and yPosition should not be set to zero.
         *
         *   Use the Math.random() function to get a number between
         *   0 and 1, then use some math to convert that to a number between 0 and the width. This is your x position.
         *
         *   Do the same thing to generate a number between 0 and the height: this is your y position.
         *   */
        var xPosition = (Math.random() * width);  //should generate a value between 0 and the width
        var yPosition = (Math.random() * height);  // should generate a value between 0 and the height
      

 	//now we'll get the HTML element where the X goes, fill in the X and set the position of the element.
 	var markerElement = document.getElementById("marker");
        markerElement.style.top = parseInt(yPosition)+'px';
        markerElement.style.left = parseInt(xPosition)+'px';
       console.log(width)
       console.log(height) 
       //console.log(markerElement)
       console.log(xPosition)
       console.log(yPosition)
 }
