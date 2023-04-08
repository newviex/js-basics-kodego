let a = 8; // number
let b = '6'; // string
b = parseInt(b, 10);
let c = a + b;

console.log('Answer: ' + c); // COERCION


let d = parseInt('Rod', 10);
console.log(d); // This should produce the NaN Not a Number


let e = isNaN(d);
console.log(e);



