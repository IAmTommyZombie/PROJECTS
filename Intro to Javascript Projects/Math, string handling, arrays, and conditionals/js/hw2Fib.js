/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework #2
 *
 *
 */



 /********************************************************************
  *
  * Fourth problem: Sum of first 11 odd Fibonacci numbers
  *
  ********************************************************************/
// first we get the HTML for the button
var getFibSum = document.getElementById("sumFib");

//then we set the event handler for when the button is clicked
getFibSum.onclick = function(){
               document.getElementById("sumFibResult").innerHTML = fibonacciSum();
 }

 /*
  *  twelveEvenFibonacciSum - calulates the sum of the first 11 odd fibonacci numbers, with 0, 1 being the first two numbers of the sequence
  *
  *            @returns {integer} The sum of the first 11 odd Fibonacci numbers
  */

 function fibonacciSum(){

 
 /// WRITE YOUR CODE HERE
 var a,b,result;

 a=0;
 b=1;
 var oddNum = 1
 var num = 0
 for(var i=0;i<=100;i++){
   
     result = a+b; 
     a=b;
     b=result;
     //console.log(result)
     if (result %2 !==0){
       
      oddNum = result + oddNum;
      num = num + 1
      console.log(result) 
      if (num == 10){
        //Since we started with the first addition already at 1, 
        //we needed to loop through 10 times to get the result
        break
        
      }
    }

 }
return oddNum;

}
