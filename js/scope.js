//We will try to cover for tonight scope basics.

// variables

// block of code


// let x = 1; 

// while(x < 10) {
//     console.log(x++);
//     if(x == 7 ) break;
// }

/*VARIABLE SCOPE & FUNCTION SCOPE*/
/*
let a = 'first example of scope outside of a codeblock'; // declaring and inializing a variable outside of a function. 


function scopeTest(){ // function scope
    console.log(a);
    let b = 'second example of scope inside of a code block';
}


scopeTest();
console.log(b);
*/
/****************************************** */
/*

let a = 'first example of scope outside of a codeblock'; // declaring and inializing a variable outside of a function. 


function scopeTest(){ // function scope
    console.log(a);
    if(a != ''){
        console.log(a);
    }
}


scopeTest();

*/
/****************************************** */

/*

let a = 'first example of scope outside of a codeblock'; // declaring and inializing a variable outside of a function. 
function scopeTest(){ // function scope
    console.log(a);
    
    if(a != ''){ // code block scope
        console.log(a);
        let c = 'third example of scope inside of a function scope and an if statement code block';
    }
    console.log(c);
}
scopeTest();

*/

/****************************************** */

/*
let a = 'first example of scope outside of a codeblock'; // declaring and inializing a variable outside of a function. 
function scopeTest(){ // function scope
    console.log(a); // first value
    a = 'changed the value of the variable a outside of the function scope'; 
    if(a != ''){ // if condition code block scope
        console.log(a);// we changed value to second here
        let c = 'third example of scope inside of a function scope and an if statement code block';
    }
    
}
scopeTest();
console.log(a); // third value that we are seeing on the console.
*/

/****************************************** */



let a = 'first example of scope outside of a codeblock'; // declaring and inializing a variable outside of a function. 
function scopeTest(){ // function scope
    console.log(a); // first value printed out
    a = 'second example changed the value of the variable a outside of the function scope'; // second value printed out
    let b = 'third example second variable inside of the function scope.';
    if(a != ''){ // if condition code block scope
        console.log(a);// we changed value to second here
        console.log('inside if: ' + b) // third value being printed out.
        let c = 'third example of scope inside of a function scope and an if statement code block';
    }
    
}
scopeTest();
console.log(a); // fourth value that we are seeing on the console.

