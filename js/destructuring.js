let a,b,c,d,e;

let names = ['rod', 'jash', 'cid', 'don', 'lucy'];
/*
[a,b,c,d,e] = names;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
*/
/*
let others;
[a,b, ...others] = names;
console.log(a);
console.log(b);
console.log(others);
*/

let year, model;
/*
let car = {
    make: 'bmw',
    model: '745li',
    year: 2023,
    value: 5000
};*/

({year, model} = {
    make: 'bmw',
    model: '745li',
    year: 2023,
    value: 5000
});

console.log(year);
console.log(model);

