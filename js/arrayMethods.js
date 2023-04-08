//var name = 'My name is ' + 'Rod' ; // String

let names = ['Jash', 'Digs', 'Lucy', 'Nami']; // Array of names
let others = ['rogers', 'bruce', 'jenny', 'hei'];


let lost = [4,8,15,16,23,42];
let fibonacci = [1,1,2,3,5,8,13,21,34,55];

var combine = lost.concat(fibonacci);

// console.log(typeof fibonacci.join('~'));

// console.log(typeof fibonacci);

// console.log(lost.shift());
// console.log(lost);

// lost.unshift(1,2,3,4);
// console.log(lost);


// console.log(names);
// console.log(names.reverse());

// console.log(names.sort());

//indexOf() and lastIndexOf()

//console.log(others.indexOf('jenny'));

// console.log(combine);
// console.log(combine.lastIndexOf(4));


//filter()

var filtered = combine.filter((x) => {if (x <= 55) return x;});

// var filtered = names.filter((x) => {if (x == 'Digs') return x;});
// var filtered = names.filter((x) => {if (x != 'Digs') return x;});

// console.log(filtered);

names.forEach((name)=> console.log(`howdy ${name}`));

// console.log(filtered.every((num)=>num< 10));


console.log(fibonacci.some((num)=> num > 50));
console.log(fibonacci.some((num)=> num > 100));

