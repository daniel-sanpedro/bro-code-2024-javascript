// TERNARY OPERATOR

//
// if else
//

// let age = 21;

// let message;

// if (age >= 18) {
//   message = "you're an adult";
// } else {
//   message = "you're a child";
// }

//
//ternary
//

// let age = 21;
// age >= 18 is the condition ? "you're an adult" is code if true : "you're a child" is code if false
// let message = age >= 18 ? "you're an adult" : "you're a child";

// console.log(message);

// let time = 16;
// let greeting =  time < 12 ? "good morning" : "good afternoon";

// console.log(greeting);

// let isStudent = true;
// let message = isStudent ? "you are a student" : "you are not a student";

// console.log(message);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;

console.log(
  `your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`
);

// results as follows:
// your total is $112.5
