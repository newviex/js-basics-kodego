// function nameOfFunction (){ // here we have a function declaration and we have an identifier.

// }

// setTimeout(() => { // YOU WOULD SEE HERE WE DONT HAVE A FUNCTION NAME, in here we use an arrow function syntax

// }, timeout);


// lets try out creating a use case for our setTimeout function

setTimeout(function () { // here we are still using the function keyword. Someitmes this is also called anonymous function.
    console.log('Lets wait for 2 seconds')
}, 2000);

// lets try to count for 2 seconds and you would see that the text appeared on the console
// after 2 seconds.

// This is a method with a nested function block inside of it. 

//setTimeout(); // Remember that this is a method or a function written by js developers.

/* 
setTimeout(function(){

}); // here we gave it a first argument which is a function expression.
*/

/*
setTimeout(function () {

}, 2000); // Here if we break down the code further we gave it a second argument which is the milliseconds before it will run
*/
// Somtimes you might see this as an inline block 

setTimeout(function () { console.log('Lets wait for 3 seconds') }, 3000); // Here we can see clearly the two arguments passed in the parameter of the setTimeout() method


setTimeout(function () { 
    console.log('Lets wait for 5 seconds') // If you highlight code and use shift plus tab this is what will happen
    // pretty useful for multiple lines of code you will need to arrange indention.
}, 5000); // Here we can see clearly the two arguments passed in the parameter of the setTimeout() method


/*
Is this clear everyone. 

> I'm sure you will be using this at some point specially when we tackle promises, callbacks, and async 
> Ok 
*/

/**
 We can have a function declaration and a function expression 
 A combination of both.

 This just means that we can create functions that can take in functions as input parameters.


 
 */

 let counter = 0; // this should be the initial value of the variable counter that we will try to execute based on the number of times we want to execute our function expression.


/*
Someimes you might get confused with a function declaration and function expression
Methods and Functions that are customized.

Here at the bottom examples we created a customized function decralation with an IDENTIFIER or NAME
*/

 function timeOUt(){ // function declaration with an identifier or customized name of the function.
    setTimeout(function (){
        console.log('hi this is a function expression inside of a setTimeout method inside of a function declaration');
    }, 6000);

 }


 timeOUt();

/*
 
 function countMessage(){ // We invoked this function inside of itself
    // Pseudo code we want to increment this counter by 1
    setTimeout(function (){
        console.log('Hi I am Rod lets count ' + counter++);
        countMessage();// here we were able to invoke the function or call it inside of itself
    }, 8000);
 }

 countMessage(); // here we invoked or called it so that we can display whatever counter value we want in our function declaration.

 // this is now running in a recursive manner. 

 // We can stop this by or using CTRL +C which is a common command for you to stop any code running on the terminal.


 // Where you able to understand the sequence of events here?
*/

/*EXAMPLE OF AN IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE) */

// () function invocation character operator


(function(){
    console.log('This is  the second example of an IIFE');
})(); // We use two function invocation operators () to immediately invoke this function.



(function(){
    console.log('This is an example of an IMMEDIATELY INVOKED FUNCTION EXPRESSION also known as IIFE');
})();

/*
At first this might be difficult to comprehend but the more you use the language 
and build projects you will get use to this syntax */

/* Yes what is the question?*/




/*Js compiler is not that strict but it is best practice to end every statement with a semi-colon*/





