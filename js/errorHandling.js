/*let a = 7 * undefined / "error handling";
console.log(a);*/
/*
function beforeTryCatch() {
    let obj = undefined;
    console.log(obj.b);
    console.log("We should never see this if the previos line of code obj.b throws an exception");
}

beforeTryCatch();
*/

/*
function afterTryCatch() {
    try {
        let obj = undefined;
        console.log(obj.b);
        console.log('If the previous line of code throws an exception you\'ll never see this');
    } catch (error) {
        console.log('I caught an exception: ' + error.message);
    }
    console.log('My application is still runnig');
}

afterTryCatch();
*/


function afterTryCatch() {
    try {
        let obj = undefined;
        // if(obj == undefined){
        //     console.log(obj.b);
        // }
        
        console.log('If the previous line of code throws an exception you\'ll never see this');
    } catch (error) {
        console.log('I caught an exception: ' + error.message);
    } finally{
        console.log('This will happen no matter what!!!')
    }
    console.log('My application is still runnig');
}

afterTryCatch();

