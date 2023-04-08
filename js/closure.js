// Closre will be associating some data with a function 

function sayHello(name){
    return function (){
        console.log('Howdy ' + name + '!')
    }
}

let rod = sayHello('rod');



let jash = sayHello('jash');
let tere = sayHello('tere');
let luffy= sayHello('luffy');

rod();
jash();
tere();
luffy();



