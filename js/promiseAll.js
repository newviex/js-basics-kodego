/*
const promiseOne = new Promise((resolve,reject)=>{
    resolve("This is Promise One!");
});


const promiseTwo = new Promise((resolve,reject)=>{
    resolve("This is Promise Two!");
});

const promiseThree = new Promise((resolve, reject)=>{
    resolve("This is Promise Three!");
});
*/

/*
Promise.all([
    promiseOne, 
    promiseTwo,
    promiseThree]).then((message)=>{
        console.log(message)
});*/

/*
Promise.race([
    promiseOne, 
    promiseTwo,
    promiseThree]).then((message)=>{
        console.log(message)
});
*/



function sleep(time, value, state){
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            if(state === "fulfill"){
                return resolve(value);
            }else{
                return reject(new Error(value));
            }
        }, time);
    });
}

const p1 = sleep(5000, "This is a successful promise one", "fulfill");
const p2 = sleep(1000, "This is a successful promise two", "fulfill");


Promise.race([p1,p2]).then((value)=>{
    console.log(value);
})