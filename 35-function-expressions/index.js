// FUNCTION EXPRESSIONS

// const hello = function () {
//   console.log("hello");
// };

// hello();

// function hello() {
//   console.log("hello");
// }

// setTimeout(function () {
//   console.log("hello");
// }, 3000);

// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(square);

// console.log(squares);

// function square(element) {
//   return Math.pow(element, 2);
// }

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map(function square(element) {
  return Math.pow(element, 2);
});
const cubes = numbers.map(function cubes(element) {
  return Math.pow(element, 3);
});
const evenNums = numbers.filter(function (element) {
  return element % 2 === 0;
});
const oddNums = numbers.filter(function (element) {
  return element % 2 !== 0;
});
const total = numbers.reduce(function (accumulater, element) {
  return accumulater + element;
});

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);
