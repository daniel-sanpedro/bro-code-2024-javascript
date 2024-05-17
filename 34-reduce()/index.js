// REDUCE ()

// const prices = [10, 30, 25, 50, 50, 35, 45];

// const total = prices.reduce(sum);

// console.log(`your ${total}`);

// // function sum(previous, element) {
// function sum(accumulator, element) {
//   return accumulator + element;
// }

const grades = [75, 50, 50, 85, 90];
const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(accumulator, element) {
  return Math.max(accumulator, element);
}

function getMin(accumulator, element) {
  return Math.min(accumulator, element);
}
