
/*
var counter = (function(){
    //private stuff. ENCAPSULATION 
    let count = 0;

    function print(message){
        console.log( message + '---' + count);
    }

    // return an object with full of properties
    return {
        //value: count,
        get: function(){return count;},
        set: function(value){count = value;},
        increment: function(){
             count +=  1;
            //count = count + 1; // this will do exactly the same thing 
            print('After Increment');
        },
        reset: function(){
            print('Before reset:');
            count = 0;
            print('After reset:');
        }
    }


})(); // IIFE Immediately Invoked FUNCTION EXPRESSION

*/

//console.log(counter.count);
//console.log(counter.value);
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.reset());
// console.log(counter.increment());
//console.log(counter.value); // we accidentally created a closure lets not do this

/*
counter.increment();
counter.increment();
counter.increment();
counter.increment();

counter.set(7);
console.log(counter.get());
counter.reset();

*/
// GLOBAL NAMESPACE why we dont want to define a variable in the Global namespace.

// 1. It is not remove from the computer memory until we navigate to a new tab. 2. Web Browser.

// COLLISION OF NAMES > NAMING COLLISIONS 

// REVEALING MODULE PATTERN

// IIFE

let counter = (function(){
    let count = 0;

    function print(message){
        console.log('$(message) => ${count}');
    };

    function getCount(){ return count;};
    
    function setCount(value){ count = value};

    function incrementCount(){
        count +=1;
        print('After increment: ');
    }

    function resetCount(){
        print('Before reset: ');
        count= 0;
        print('After reset:');
    }

    return {
        get: getCount,
        set: setCount,
        increment: incrementCount,
        reset: resetCount
    }



})();

console.log(counter);
console.log(counter.set(8));
console.log(counter.get());