/* function greetings(message='Hi!'){
     console.log(message);
}


 greetings();

// PARAMETERS vs ARGUMENTS
greetings('Hello!');

function add(x, y){
   return console.log(x + y);
   
    
}

//console.log(add(5,5));

add(5,5);


function say(message){
    message = typeof message !== 'undefined' ? message : 'Hi!';
    console.log(message);
}

say();
*/

/*returning a NaN
function multiply(a, b){
    return a * b;
}

console.log(multiply(5,2)); // this requires two arguments
console.log(multiply(5)); // this requires two arguments
*/

function multiply(a, b){
    b = typeof b !== 'undefined' ? b : 1;
    return a * b;
}

console.log(multiply(5, 5)); // this requires two arguments

console.log(multiply(5));