// var count; 
// var count = 3;
/**Inside of the function invocation () operators we usually add some sort of expression */
//if(count == 3){ 
  //   console.log('count is equal to 4');
//} // this will not do anything. 

// if statements , if a condition is true.
// else statements , if the same condition is false.
// else if statements , if the first condition is false
// switch  statements, here we can specify alternative blocks of code to be executed.
/**************************************************************** */
var count = 3;

// if(count == 4){
//   console.log('count is equal to 4'); // if the condition is true.
// } else {
//     console.log('Count is not equal to 4'); // if the condition is false.
// }

// /**************************************************************** */

// var count = 4;

// if(count !== 4){ // the exclamation mark is usually used as a ! NOT operator in JS.
//   console.log('count is equal to 4'); // if false
// } else if (count > 4) {
//     console.log('count is greater than 4'); // if false
// } else if (count < 4 ){
//     console.log('count is less than 4'); // this is true the condition has been met and we can now make a decision. // what if this is also not true
// } else{
//     console.log('count is not equal to 4'); // this will not run anymore.
// }


/**************************************************************** */

/**OK Now lets talk about the SWITCH STATEMENT */

/**Here we would want to evaluate whatever is the expression that gets a number of cases. */

// lets declare a variable hero
/*
let hero = 'Batman';

switch (hero) {
    case 'Superman':
        console.log('Super strength');
        console.log('X-ray vision');    
        break; 
    case 'Batman':
        console.log('Money and intelligence');
        console.log('Martial arts skills');
        break;
    case 'Aquaman':
        console.log('Can breath under water');
        console.log('Can communicate with the fishes');
        break;// we don't have a break statement here
    default:
        console.log('Members of the JLA');
        break;
}
*/

/**************************************************************** */
// let hero = 'Batman'; ;//JS is case sensitive;

// switch (hero.toLowerCase()) {
//     case 'superman':
//         console.log('Super strength');
//         console.log('X-ray vision');    
//         break; 
//     case 'batman':
//         console.log('Money and intelligence');
//         console.log('Martial arts skills');
//         break;
//     case 'aquaman':
//         console.log('Can breath under water');
//         console.log('Can communicate with the fishes');
//         break;// we don't have a break statement here
//     default:
//         console.log('Members of the JLA');
//         break;
// }


/**************************************************************** */

// JS DATE OBJECTS > Are created with the new Date() constructor

// let date = new Date();
// console.log(date);

// let day = new Date();

// let today = day.getDay(); // current day
// let hours = day.getHours(); // current hour

// switch (today) {
//     case 0:
//         day = 'Sunday';

//         break;
//     case 1:
//         day = 'Monday';

//         break;
//     case 2:
//         console.log(day = 'Tuesday');
//         console.log(hours);
//         break;
//     case 3:
//         day = 'Wednesday';

//         break;
//     case 4:
//         day = 'Thursday';

//         break;
//     case 5:
//         day = 'Friday';

//         break;
//     case 6:
//         day = 'Saturday';
//         break;

// }

// // console.log(day);

// /**************************************************************** */
// let hero = 'thor';
// switch (hero.toLowerCase() === 'thor' || hero.toUpperCase() === 'THOR'){
//     case 'hulk':
//         console.log('Super Strength');
//         console.log('Smart Scientist');
//         break;
//     case 'sangchi':
//         console.log('Power of 10 rings');
//         console.log('Martial arts expert');
//         break;
//     case 'thor':
//         console.log('God of thunder');
//         console.log('Worthy of the hammer');
//         break;
//     case (false):
//         console.log('Thunder');
//         console.log('Hammer');
//         console.log(hero);
//         break;
//     default:
//         console.log('members of the marvel universe');

// }
/*
let heroLowerCase = "thor";
let heroUpperCase = "THOR";

switch (heroUpperCase || heroLowerCase ) {
    case "hulk":
        console.log("Super Strength");
        console.log("Smart Scientist");
        break;
    case "sangchi":
        console.log("Power of 10 rings");
        console.log("Martial arts expert");
        break;
    case "THOR":
        console.log("God of thunder");
        console.log("Worthy of the hammer");
        console.log(heroUpperCase);
        break;
    case "THOR":
        console.log("God of thunder");
        console.log("Worthy of the hammer");
        console.log(heroLowerCase);
        break;
    case "thor" && "THOR":
        console.log("God of thunder");
        console.log("Worthy of the hammer");
        console.log(heroUpperCase);
        console.log(heroLowerCase);

        break;
    default:
        console.log("members of the marvel universe");

}
*/

/**************************************************************** */

//TERNARY Operator

// single line decision statement

// evaulateion of an expression and we want to return a value. 

// We want to check for true or false

// Inline statement to evaluate true or false

let a = 1, b = '1'; // declared and initialized two variables on a single line.

let result = (a === b) ? 'true' : 'false'; // we are checiking if true or false on a single inline statement

// JS compiler now understands that we dont want to use the concept of COERCION here. Because we are using the strict equality operator ===
console.log(result);




