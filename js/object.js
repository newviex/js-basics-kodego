// typeof array 

//let array = [2023, 'bmw', '745li'];
//let car0 = {year: 2023, make:'toyota', model:'745li'};

/*OBJECT LITERAL SYNTAX*/
let car1 = {
    make: 'bmw',
    model: '745li',
    year: 2023,
    getPrice: function () {
        return 5000;
    },
    printDescription: function () {
        console.log(this.make + ' ' + this.model)
    }
}


// console.log(typeof array);
// console.log(array);



// car1.printDescription();
// console.log(car1.year);
// console.log(car1.getPrice());

// console.log(car1['getPrice']);

// console.log(car1[1]);


/********************************************** */
// var car2 = {};
// car2.whatever = 'hi';
// console.log(car2.whatever);

// var a = {
//     myProperty: {b: 'rod'}
// };

// console.log(a.myProperty.b);


/********************************************** */
/*
var car3 = {
    myProperty:[
        {d: 'this'},
        {e: 'can'},
        {f: 'be really'},
        {g: 'confusing'}

    ]
}
console.log(car3.myProperty[0]);
console.log(car3.myProperty[1]);
console.log(car3.myProperty[2]);
console.log(car3.myProperty[3]);
*/

/********************** */
/*
let carParking = [
    {year: 2021, make: 'BMW', model: '528i'},
    {year: 2019, make: 'Toyota', model: '4runner'},
    {year: 1982, make: 'Buick', model: 'Skylark'}
]

console.log(carParking[0]);
*/

/******************************* */
let contact = {
    customer: [
        { firstName: 'Rod', lastName: 'Lopez', phoneNumber: ['(123) 000-00000', '(123) 457-8888'] },
        { firstName: 'Roronoa', lastName: 'Zorro', phoneNumber: ['(123) 001-11111', '(123) 898-8888'] }
    ],
    employees: [
        { firstName: 'Sanji', lastname: 'Vinsmoke', phoneNumber: ['(123) 000-00000', '(123) 457-8888'] },
        { firstName: 'Franki', lastname: 'Vinsmoke', phoneNumber: ['(123) 000-00000', '(123) 457-8888'] },
        { firstName: 'Nami', lastname: 'Vinsmoke', phoneNumber: ['(123) 000-00000', '(123) 457-8888'] }
    ]
}



console.log(contact.customer[0]);
/********* */
//JSON (JAVASCRIPT OBJECT NOTATION)


//https://stackoverflow.com/questions/2904131/what-is-the-difference-between-json-and-object-literal-notation
// JSON is different from OBJECT LITERALS