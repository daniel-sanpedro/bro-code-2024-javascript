// If statements

// IF STATEMENTS = if a condition is true, excute some code
//                 if not, do something else

// let age = 25;

// if (age >= 18) {
//   console.log("you are old enough to enter this site");
// } else {
//   console.log("you must be 18+ to enter this site");
// }

// result as follows:
// you are old enough to enter this site

// let age = 16;

// if (age >= 18) {
//   console.log("you are old enough to enter this site");
// } else {
//   console.log("you must be 18+ to enter this site");
// }

// result as follows:
// you must be 18+ to enter this site

// let time = 9;

// if (time < 12) {
// console.log("good morning")
// }
// else {
//     console.log("good afternoon")
// }

// results as follows:
// good morning

// let time = 14;

// if (time < 12) {
// console.log("good morning")
// }
// else {
//     console.log("good afternoon")
// }

// results as follows:
// good afternoon

//
// boolean variables
//

// let isStudent = false;

// if (isStudent) {
//   console.log("you are a student");
// } else {
//   console.log("you are not a student");
// }

// results as follows:
// you are a student

// let isStudent = false;

// if (isStudent) {
//   console.log("you are a student");
// } else {
//   console.log("you are not a student");
// }

// results as follows:
// you are not a student

//
// nested IF statements
//

// let age = 25;
// let hasLicense = true;

// if (age >= 16) {
//   console.log("you are old enough to drive");
// } else {
//   console.log("you must be 18+ to drive");
// }

// results as follows:
// you are old enough to drive

// let age = 15;
// let hasLicense = true;

// if (age >= 16) {
//   console.log("you are old enough to drive");
// } else {
//   console.log("you must be 18+ to drive");
// }

// results as follows:
// you must be 18+ to drive

// let age = 25;
// let hasLicense = true;

// if (age >= 16) {
//   console.log("you are old enough to drive");
//   if (hasLicense) {
//     console.log("you have a license");
//   } else {
//     console.log("you do not have a license");
//   }
// } else {
//   console.log("you must be 18+ to drive");
// }

// results as follows:
// you are old enough to drive
// you have a license

// let age = 25;
// let hasLicense = false;

// if (age >= 16) {
//   console.log("you are old enough to drive");
//   if (hasLicense) {
//     console.log("you have a license");
//   } else {
//     console.log("you do not have a license");
//   }
// } else {
//   console.log("you must be 18+ to drive");
// }

// results as follows:
// you are old enough to drive
// you do not have a license

//
// ELSE IF STATEMENTS
//

// let age = -1;

// if (age >= 18){
//     console.log("you are old enough to enter this site");
// }
// else if(age < 0){
// console.log("your age cant be below zero")
// }
// else{
//     console.log("you must be 18+ to enter this site");
// }

// results as follows:
// your age cant be below zero

// let age = 119;

// if (age >= 18) {
//   console.log("you are old enough to enter this site");
// } else if (age < 0) {
//   console.log("your age cant be below zero");
// } else if (age >= 100) {
//   console.log("too old to enter this site");
// } else {
//   console.log("you must be 18+ to enter this site");
// }

// results as follows:
// too old enter this site

// let age = 19;

// if (age >= 100) {
//   console.log("too old to enter this site");
// } else if (age >= 18) {
//   console.log("you are old enough to enter this site");
// } else if (age < 0) {
//   console.log("your age cant be below zero");
// } else {
//   console.log("you must be 18+ to enter this site");
// }

// results as follows:
// you are old enough to enter this site

//
// == Loose Equality
//

// let age = 0;

// if (age >= 100) {
//   console.log("too old to enter this site");
// }
// else if (age == 0) {
//     console.log("you were just born");
// }
// else if (age >= 18) {
//   console.log("you are old enough to enter this site");
// } else if (age < 0) {
//   console.log("your age cant be below zero");
// } else {
//   console.log("you must be 18+ to enter this site");
// }

// results as follows:
// you were just born

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function() {

    age = myText.value;
    age = Number(age);
    if (age >= 100) {
        resultElement.textContent = "too old to enter this site";
    } else if (age == 0) {
        resultElement.textContent = "you were just born";
    } else if (age >= 18) {
        resultElement.textContent = "you are old enough to enter this site";
    } else if (age < 0) {
        resultElement.textContent = "your age cant be below zero";
    } else {
        resultElement.textContent = "you must be 18+ to enter this site";
    }
    
}