// type conversions = change the datatype of a value to another
//                    (strings, numbers, booleans)

// let age = window.prompt("how old are you?");
// age += 1;

// console.log(age);

// this will result in (age)36 + 1 = 361

// let age = window.prompt("how old are you?");
// age = number(age)
// age += 1;

// console.log(age);

// this will turn a string into a number

//
// strings
//

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// results go as follows:
// NaN 'number'
// pizza string
// true 'boolean'

// if you try to convert alphabetical characters into numbers that variable will be NaN(not a number)
// pizza is already a string so converting it into a string does nothing.
//      thats why value type is still pizza and the data type is string
// converting the word pizza into a boolean returns true and data type is still boolean.

//
// numbers
//

// let y = "0";
// let x = "0";
// let z = "0";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// results go as follows:
// 0 'number'
// 0 string
// true 'boolean'

// x contains 0 its a number and has not letters
// y is 0 but is treated as a string
// z returns true

//
// boolean
//

// let y = "";
// let x = "";
// let z = "";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// results go as follows:
// 0 'number'
// string
// false 'boolean'

// a reason to typecast a string as a boolean to check and see if user input is inputted correctly

//
// declared but not assigned a value
//

let y;
let x;
let z;

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

// NaN 'number'
// undefined string
// false 'boolean'
