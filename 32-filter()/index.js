// FILTER ()

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd);

// console.log(evenNums);
// console.log(oddNums);

// function isEven(element) {
//   return element % 2 === 0;
// }

// function isOdd(element) {
//   return element % 2 !== 0;
// }

// const ages = [16, 20, 56, 19, 29, 22];
// const adults = ages.filter(isAdult);
// const child = ages.filter(isChild);

// console.log(adults);
// console.log(child);

// function isAdult(element) {
//   return element >= 18;
// }

// function isChild(element) {
//   return element < 18;
// }

const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(shortWords);
console.log(longWords);

function getShortWords(element) {
  return element.length <= 6;
}

function getLongWords(element) {
  return element.length > 6;
}
