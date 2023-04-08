/*function print(callback){
    callback();
}*/

//console.log(typeof callback);

// taskOne();
// taskTwo();
// taskThree();

/*
function taskOne(){
    console.log('Task 1');
}

function taskTwo(){
    console.log('Task 2');
}

setTimeout(taskOne, 2000);
taskTwo();
*/
// function taskThree(){
//     console.log('Task 3');
// }


// const message = function () {
//  console.log('This message will be shown after 3 seconds');
// }

//setTimeout(message, 3000);

/*
setTimeout(function(){
    console.log('This anonymous function will run after 3 seconds');
}, 3000);*/

/*
setTimeout(() => {
    console.log('This arrow function will run after 3 seconds');
}, 3000);
*/

document.querySelector('#callback__btn').addEventListener("click",function(){
    console.log('This is a callback that got displayed using an event listener method when a user clicks a button')
});


