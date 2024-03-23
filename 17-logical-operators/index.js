// LOGICAL OPERATORS

// LOGICAL OPERATORS

// const temp = 20;

// if (temp > 0) {
//   console.log("the weather is good");
// }
// else if (temp <= 30) {
//     console.log("the weather is good");
// }
// else{
//     console.log("the weather is bad");
// }

// results are as follows:
// the weather is good

//
// AND = &&
//

// const temp = 200;

// both conditions must be true to execute this code
// is the temperature is greater than zero and greater than or equal to 30
// if (temp > 0 && temp <= 30) {
//   console.log("the weather is good");
// }
// else{
//     console.log("the weather is bad");
// }

// results are as follows:
// the weather is bad

//
// OR = ||
//

// const temp = 200;

// for the or logical operator one of these conditions have to be true
//                                          (temp > 0) OR (temp <= 30)
//
// if (temp > 0 || temp <= 30) {
//   console.log("the weather is good");
// } else {
//   console.log("the weather is bad");
// }

// results are as follows:
// at temp: 25 works well but not at temps outside its scope
// at temps above 31 or below -1 it would give a good result

// const temp = 2;

// if the temp is greater than or equal to 0 OR the temp is less than 30
// the weather is bad
// if (temp <= 0 || temp > 30) {
//   console.log("the weather is bad");
// } else {
//   console.log("the weather is good");
// }

// results are as follows:
// range 0 - 30 : temp is good
// outside the range 0 - 30 : temp is bad

//
// NOT = !
//

// const isSunny = true;

// if(isSunny){
//   console.log("it is sunny");
// }
// else{
//   console.log("it is not sunny");
// }

// results are as follows:
// if true: it is sunny
// if false: it is not sunny

// (NOT = !) operator takes truth to falsity and vice versa. it is typically used with boolean (logical) values
const isSunny = true;

// by including the (!) means we are looking if its NOTsunny
if (!isSunny) {
  console.log("it is not sunny");
} else {
  console.log("it is sunny");
}

// results are as follows:
// if true: it is sunny
// if false: it is not sunny
