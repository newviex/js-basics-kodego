// ... spread operator > to access some elements of an array
// ...arg rest parameter > used as a function parameter
/*
function checkout(...items){
    let total = 0;
    for(let i in items){
        total += items[i];
    }
    return total;
}

console.log("The total is: $" + checkout(10,40,80));
*/

function displayName(first, last, ...middle){
    console.log("Welcome  " + first, middle.join(' '), last + " to our game!!!");
}

//console.log(displayName("Rodrigo", "Lopez", "Bonzerr", "Santos", "Cid"));


displayName("Rodrigo", "Lopez", "Bonzerr", "Santos");

