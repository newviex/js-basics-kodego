/*let car = {
    make: 'bmw',
    model: '745li',
    year: 2000
}*/

/*
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}*/

//let myCar = new Car('bmw', '745li', 2023);
//let myCar = new Car('bmw', '745li');

//console.log(myCar);


function MyFunction(){
   return {console: console.log("Hey, we've just created a simple function.")}
}

let myFunction = new MyFunction();
console.log(MyFunction)
console.log(typeof MyFunction);

console.log(myFunction);
console.log(typeof myFunction);


