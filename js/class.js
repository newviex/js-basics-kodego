/*
// CLASS DECLARATION

class Car{

};

// CLASS EXPRESSION 

let Car = class {

};
*/

class Car{
    constructor(make,model,year, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    
    print(){
        console.log(`${this.make} ${this.model} ${this.year} ${this.color}`);
    }
}


let myCar = new Car('bmw', '745li', 2022);
console.log(typeof myCar);
//myCar.print();
//myCar.revEngine();



class SportsCar extends Car{
    constructor(make,model,year,color){
        super(make,model,year);
        this.color = color;
    }
    revEngine(){
        console.log('VROOMMMM goes the ' + this.model);
    }
    show() {
        console.log(this.color);
    }
}

let mySportsCar = new SportsCar('dodge', 'viper', 2011, 'red');

mySportsCar.print();
//mySportsCar.revEngine();
mySportsCar.show();


