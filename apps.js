/*sayHello();

function sayHello() {
    // say hello here
    console.log ("hey!");
}
*/

/*
sayHello(); // throws an ERROR!

let sayHello = function () {
    // say hello here
    console.log ("hi hi");
}
*/

//Something important to note is that when setting a function to a variable, the variable itself will be hoisted, but the function body will not.
//You would have to declare the function body first, and call the function later:

let sayHello = function () {
    // say hello here
    console.log("What's up");
}

sayHello(); // we're all good!

//Functions Inside Other Functions
//Functions can be declared and called inside other functions.

function addSquares(a, b) {
    function square(x) {
        return x * x;
    }

    return square(a) + square(b);
}

let a = addSquares(2, 3); // returns 13
console.log(a);

//Context - Left of the Dot


let person = {
    name: 'John', sayHello: function () {
        console.log(this.name);
    }
};
person.sayHello(); //displays John

//Context Otherwise

function testThis() {
    console.log(this);
}
testThis();

function sayHi(name) {
    console.log(name);
    console.log(this);
}
sayHi('Joe');

//call example

function sayHey(name, age) {
    console.log(name);
    console.log(age);
    console.log(this);
}
sayHey.call('Jayden', 'Jim', 25);