// templates
/*EXAMPLE 1 */
// let firstName = 'rod';

// console.log(`Hi ${firstName}!`);


/*EXAMPLE 2 */
// let sentence = `This is really convenienent. 
// You probably will never want to do somehting quite like this.
// You might choose to put long passages of text into an
// external file and load it somehow.`;

// console.log(sentence);


/*EXAMPLE 3 */
// let sentence2 = `This is really convenienent. 
//             You probably will never want to do somehting quite like this.
//         You might choose to put long passages of text into an
//     external file and load it somehow.`

// console.log(sentence2);

/*EXAMPLE 4 */
/*
function getReasonCount(){ return 1;}

let interpolation = `Give me ${(getReasonCount()==1) ? 'one good reason' : 'a few reasons'} to try this!`;
console.log(interpolation);
*/

function getReasonCount(count){ 
    
    if(count == 2){
        return 'one good reason';
    }else{
        return 'a few reasons';
    }
    
}




let interpolation = `Give me ${getReasonCount(1)} to try this!`;
console.log(interpolation);
