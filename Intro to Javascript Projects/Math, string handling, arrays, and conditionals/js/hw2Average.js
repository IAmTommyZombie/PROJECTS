/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework #2
 *
 *
 */

 /********************************************************************
  *
  * First problem: calculate an average
  *
  * If the values entered by the user aren't numbers (or convertible to numbers),
  * ignore them (treat them as zeroes).
  *
  ********************************************************************/

 // This line sets calcAvgButton to point to the browser object that supports the button on this form.
 // You don't need to understand this yet - we'll cover it in depth later in the course - but it's
 //  here to make the form work in the page.
 var calcAvgButton = document.getElementById("calcAverage");

 calcAvgButton.onclick = function(){  //onclick means that when the button is clicked, this function will run

   // these three variables contain values from the three form fields
   var val1 = document.getElementById("val1").value;
   var val2 = document.getElementById("val2").value;
   var val3 = document.getElementById("val3").value;

   // This variable will contain your result. Notice we declare it, but
   //  aren't assigning any value.  For now, its value will be 'undefined'.
   var result;
   
  // Your calculations go here. You'll start with the variables va1, val2, and val3,
  //  calculate the average, and assign the result in the variable 'result'.  Remember
  //  that the values that come from the form will be strings, so you'll need
  //  to convert them to numbers before doing math on them.
   result = (parseInt(val1) + parseInt(val2) + parseInt(val3)) / 3


  if (isNaN(val1) || isNaN(val2) || isNaN(val3)){
    return document.getElementById("resultSpan").innerHTML = " ";
  }
   // The above statement will return a blank to the page if any values in the box contain non numbers

  // now we write the result to the page
   document.getElementById("resultSpan").innerHTML = result;
 
 }