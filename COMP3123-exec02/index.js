//Exercise 1:
const greeter = (myArray) => {
    const greetText = "Hello ";
    for (const name of myArray) {
        console.log(`${greetText}${name}`);
    }
};
greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan']);

//Exercise 2:
const capitalize = (str) => {
    const [firstChar, ...rest] = str;
    return `${firstChar.toUpperCase()}${rest.join('')}`;
}

console.log(capitalize('fooBar'));
console.log(capitalize('nodejs'));

//Exercise 3:
const colors = ['red', 'green', 'blue'];
const capitalizedColors = colors.map(capitalize);

console.log(capitalizedColors);

//Exercise 4:
var values = [1, 60, 34, 30, 20, 5];
const filterLessThan20 = values.filter(value => value < 20);

console.log(filterLessThan20);

//Exercise 5:
var array = [1, 2, 3, 4];
const calculateSum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const calculateProduct = array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(calculateSum); 
console.log(calculateProduct); 

//Exercise 6:
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return `Model: ${this.model} Engine ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);  
        this.balance = balance;
    }

    info() {
        return `${this.model} has a balance of $${this.balance.toFixed(2)}.00`;
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());  

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());    
