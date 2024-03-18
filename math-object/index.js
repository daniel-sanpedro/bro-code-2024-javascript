// Math object
// Math = built-in object that provides a
//        collection of properties and methods

// console.log(Math.PI)
// console.log(Math.E)

// 
// Math.round
// 

// let x = 3.21;
// let y = 2;
// let z;

// Math.round is used to round numbers to the nearest integer
// z = Math.round(x);

// console.log(z);
// results as follows:
// 3

// 
// Math.floor
// 

// let x = 3.99;
// let y = 2;
// let z;

// Math.floor is a static method always rounds down to the nearest integer or equal to a given number
// z = Math.floor(x);

// console.log(z);
// results as follows:
// 3

// 
// Math.ceil 
// 

// let x = 3.99;
// let y = 2;
// let z;

// Math.ceil is a static method always rounds up and returns the smallest integer greater than or equal to a given number
// z = Math.ceil(x);

// console.log(z);
// results as follows:
// 3

// 
// Math.trunc
// 

// let x = 3.99;
// let y = 2;
// let z;

// Math.trunc is a static method returns the integer part of a number by removing any fractional digits
// z = Math.trunc(x);

// console.log(z);
// results as follows:
// 3

// 
// Math.pow
// 

// let x = 3;
// let y = 2;
// let z;

// Math.pow is number representing base taken to the power of exponent 
//       Returns NaN in one of the following cases: exponent is NaN
// z = Math.pow(y, x);

// console.log(z);
// results as follows:
// (x, y) = 9
// (y, x) = 8

// 
// Math.sqrt
// 

// let x = 81;
// let y = 2;
// let z;

// Math.sqrt static method returns the square root of a number
// z = Math.sqrt(x);

// console.log(z);
// results as follows:
// 9

// 
// Math.log
// 

// let x = 10;
// let y = 2;
// let z;

// Math.log static method returns the natural logarithm of a number
// z = Math.log(x);

// console.log(z);
// results as follows: 
// 2.30258

// 
// Math.sin
// 

// let x = 45;
// let y = 2;
// let z;

// Math.sin is a static method returns the sine of a number in radians
// z = Math.sin(x);

// console.log(z);
// results as follows: 
// 0.850903

// 
// Math. cos
//  

// let x = 45;
// let y = 2;
// let z;

// Math.cos() static method returns the cosine of a number in radians
// z = Math.cos(x);

// console.log(z);
// results as follows:
// 0.5253219

// 
// Math.tan
// 

// let x = 45;
// let y = 2;
// let z;

// Math.tan() static method returns the tangent of a number in radians
// z = Math.tan(x);

// console.log(z);
// results as follows:
// 1.61977

// 
// Math.abs
// 

// let x = -3.21;
// let y = 2;
// let z;

// Math.abs() static method returns the absolute value of a number
// z = Math.abs(x);

// console.log(z);
// results as follows:
// 3.21

// 
// Math.sign
// 

// let x = 3.21;
// let y = 2;
// let z;

// Math.sign() static method returns 1 or -1, indicating the sign of the number passed as argument
// z = Math.sign(x);

// console.log(z);
// results as follows:
// 1
// if positive it will return +1
// if negative it will return -1
// will return 0 if the sign is 0

// 
// Math.max
// 

let x = 3;
let y = 2;
let z = 1;

// Math.max() static method returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters
let max = Math.max(x, y, z);
let min = Math.min(x, y, z);


console.log(max);
// results as follows:
// max returns 3
// min returns 1
